exports.home = {
	handler: (request, reply) => {
		reply.file('./app/views/home.html')
	}
}
