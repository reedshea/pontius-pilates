import json
import os
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['TABLE_NAME'])


def handler(event, context):
    """Increment and return visitor count."""
    try:
        # Atomic increment
        response = table.update_item(
            Key={'pk': 'visitors'},
            UpdateExpression='SET #count = #count + :inc',
            ExpressionAttributeNames={'#count': 'count'},
            ExpressionAttributeValues={':inc': 1},
            ReturnValues='UPDATED_NEW'
        )

        count = int(response['Attributes']['count'])

        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'count': count})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': str(e)})
        }
