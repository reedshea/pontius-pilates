export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BgKzEH-w.js","app":"_app/immutable/entry/app.C3pqwoi6.js","imports":["_app/immutable/entry/start.BgKzEH-w.js","_app/immutable/chunks/entry.CHubr-eX.js","_app/immutable/chunks/runtime.-JWwNjUF.js","_app/immutable/entry/app.C3pqwoi6.js","_app/immutable/chunks/runtime.-JWwNjUF.js","_app/immutable/chunks/render.Bpy9Dnyz.js","_app/immutable/chunks/disclose-version.HT6pIQr-.js","_app/immutable/chunks/store.BHvwJAgi.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
