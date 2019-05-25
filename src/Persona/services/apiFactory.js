const server = () => {
    const responses = {
        '/personas/20': {
            status: 200, 
            data: {
                "id":20,
                "name":"Tess",
                "initials":"TES",
                "color":"#F46060",
                "avatar":"tess",
            } 
        },

        '/personas/20/columns': {
            status: 200,
            data: [
                {
                    "id": 1,
                    "width": "thin"
                },
                {
                    "id": 2,
                    "width": "wide"
                }
            ]
        },

        '/personas/20/columns/fields': {
            status: 200,
            data: [
                {
                    "id":1,
                    "title":"Image",
                    "field_type":"image",
                    "data":"tess.jpg",
                    "column_id":1,
                    "prev_id":null,
                    "next_id":2
                },
                {
                    "id":2,
                    "title":"Age",
                    "field_type":"number",
                    "data":27,
                    "column_id":1,
                    "prev_id":1,
                    "next_id":3
                },
                {
                    "id":3,
                    "title":"Gender",
                    "field_type":"short_text",
                    "data":"Not defined",
                    "column_id":1,
                    "prev_id":2,
                    "next_id":4
                },
                {
                    "id":4,
                    "title":"Mood Images",
                    "field_type":"image_gallery",
                    "data":[
                        "dog.jpg",
                        "beach.jpeg"
                    ],
                    "column_id":1,
                    "prev_id":3,
                    "next_id":null
                },
                {
                    "id":5,
                    "title":"Occupation",
                    "field_type":"short_text",
                    "data":"Researcher",
                    "column_id":2,
                    "prev_id":null,
                    "next_id":6
                },
                {
                    "id":6,
                    "title":"Nationality",
                    "field_type":"short_text",
                    "data":"French",
                    "column_id":2,
                    "prev_id":5,
                    "next_id":7
                },
                {
                    "id":7,
                    "title":"Marital Status",
                    "field_type":"short_text",
                    "data":"Maried, 3 kids",
                    "column_id":2,
                    "prev_id":6,
                    "next_id":8
                },
                {
                    "id":8,
                    "title":"Quote",
                    "field_type":"long_text",
                    "data":"“Life may not be the party we hoped for, but while we're here, we should dance.”",
                    "column_id":2,
                    "prev_id":7,
                    "next_id":9
                },
                {
                    "id":9,
                    "title":"Description",
                    "field_type":"long_text",
                    "data":"Tess is that friendly neighbor next door. She has a secure job at the national railway company. Together with her husband, she has a monthly household income of 5000 Euro net. Tess loves to spend free time with her three kids. Marcus, her husband, loves being outdoors, so whenever possible the couple takes long hiking tours with their children. Tess is not very interested in technology. She wants things that just work.",
                    "column_id":2,
                    "prev_id":8,
                    "next_id":null
                }
            ]
        }
    };

    return {
        getResponse: url => responses[url] || { status: 404 },
        getDynamicResponse: expectedResponse => ({ status: 200, data: {...expectedResponse} })
    }
};

const mockedHttpCall = (url = '', method = 'GET', body = {}) => {
    const { getResponse, getDynamicResponse } = server();
    const response = method === 'GET' ? getResponse(url) : getDynamicResponse(body);
    
    console.log(`Doing ${method} request to endpoint ${url} returned the response: ${JSON.stringify(response)}`);
    
    return new Promise(
        resolve => setTimeout(() => resolve(response) , 1000)
    );
}

const apiFactory = () => ({
    getPersona: id => mockedHttpCall(`/personas/${id}`),
    updatePersona: persona => mockedHttpCall(`/personas/${persona.id}`, 'PUT', persona),
    getColumns: personaId => mockedHttpCall(`/personas/${personaId}/columns`),
    getFields: personaId => mockedHttpCall(`/personas/${personaId}/columns/fields`)
});

export default apiFactory;