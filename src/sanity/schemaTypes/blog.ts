

const blogs={
    name:"blog",
    title:"blog",
    type:"document",
    fields:[
        {
            name:"blog",
            title:"blog",
            type:"string",
            description:"the tittle of the blog post"
        },
        {
            name:"slug",
            title:"slug",
            type:"slug",
            description:"the slug of the blog post",
            options:{
                source:"blog"}
        },
        {
            name:"image",
            title:"image",
            type:"image",
            description:"the image of the blog post"
        },
        {
            name:"heading",
            title:"heading",
            type:"string",
            description:"the heading of the blog post"
        },
        {
            name:"content",
            title:"content",
            type:'array',
            description:"the content of the blog post",
            of:[{
                type:'block'
            },
            {
                name: 'image',
                title:"image",
                 type:"image",
                 option:{
                    hotspot: true
                 }
            }
        ]

        },
    ]
}