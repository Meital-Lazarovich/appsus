'use strict'

import {storageService} from '../../../services/storage.service.js'
import {makeId} from '../../../services/util.service.js'

export default {
    getEmails,
    findEmail
}

let gEmails = [
    {
        id: makeId(),
        subject: 'Postion Class', 
        body: 'Snape is a maniac Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et magnis dis. Libero enim sed faucibus turpis in eu. Dui faucibus in ornare quam viverra orci sagittis. Nibh praesent tristique magna sit amet.', 
        isRead: false, 
        sentAt : 1551133930594
    },
    {
        id: makeId(),
        subject: 'How are you?', 
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et magnis dis. Libero enim sed faucibus turpis in eu. Dui faucibus in ornare quam viverra orci sagittis. Nibh praesent tristique magna sit amet.', 
        isRead: false, 
        sentAt : 1551133930594
    },
    {
        id: makeId(),
        subject: 'Heloooooooo', 
        body: 'Lets go to the movies Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et magnis dis. Libero enim sed faucibus turpis in eu. Dui faucibus in ornare quam viverra orci sagittis. Nibh praesent tristique magna sit amet.', 
        isRead: false, 
        sentAt : 1551133930594
    },
]

function getEmails() {
    return gEmails;
}

function findEmail(id) {
    let email =gEmails.find(email => {
        return email.id === id;
    })
    return Promise.resolve(email);
  }