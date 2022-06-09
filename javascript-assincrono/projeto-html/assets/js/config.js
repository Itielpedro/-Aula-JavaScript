module.exports ={
    async headers(){
        return [
            source, '/:path*',
            headers, [
                {key: 'Acess-Control-allow-Credentials', value: 'true'}
            ]  
        ]
    }
}