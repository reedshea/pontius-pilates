import json
import os
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['TABLE_NAME'])

# Seed value - starts counter at 3000
SEED_VALUE = 3000


def handler(event, context):
    """Increment and return visitor count."""
    try:
        # Atomic increment
        response = table.update_item(
            Key={'pk': 'visitors'},
            UpdateExpression='SET #count = if_not_exists(#count, :seed) + :inc',
            ExpressionAttributeNames={'#count': 'count'},
            ExpressionAttributeValues={':inc': 1, ':seed': SEED_VALUE},
            ReturnValues='UPDATED_NEW'
        )

        count = int(response['Attributes']['count'])

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            'body': json.dumps({'count': count})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            'body': json.dumps({'error': str(e)})
        }
