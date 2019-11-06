import {storageService} from '../../../services/storage.service.js'
import {makeId} from '../../../services/util.service.js'


export const keepService = {
    getNotes,
    
}

var gNotes = notes;

function getNotes() {
    return gNotes;
}


var notes = [
    {
        id: '2A3d',
        type: 'text',
        data: {
            txt: 'How to make the best magic ever'
        }
    },
    {
        id: '92Pq',
        type: 'img',
        data: {
            url: 'https://www.insertcart.com/wp-content/uploads/2018/05/thumbnail.jpg'
        }
    },
    {
        id: '204sK',
        type: 'list',
        data: {
            items: [
                {
                    txt: 'buy a new wand',
                    isDone: false
                },
                {
                    txt: 'fix the moving img',
                    isDone: true
                }
            ]
        }
    }
]

