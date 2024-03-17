export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "sveltekit-github-pages/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.D86cqiU8.js","app":"_app/immutable/entry/app.DVTC1J2s.js","imports":["_app/immutable/entry/start.D86cqiU8.js","_app/immutable/chunks/entry.C9ORe7np.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.DVTC1J2s.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CDIhRLKe.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
