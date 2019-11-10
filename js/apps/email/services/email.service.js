'use strict'

import { storageService } from '../../../services/storage.service.js'
import { makeId } from '../../../services/util.service.js'

const STORAGE_KEY = 'emails'

export default {
    getEmails,
    findEmail,
    addEmail,
    toggleIsRead,
    getUnreadEmails,
    deleteEmail,
    starEmail,
    markAs
}

let gEmails = [
    {
        id: makeId(),
        subject: 'Postion Class',
        body: 'Snape is a maniac Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et magnis dis. Libero enim sed faucibus turpis in eu. Dui faucibus in ornare quam viverra orci sagittis. Nibh praesent tristique magna sit amet.',
        isRead: false,
        sentAt: 1554508800555,
        stared: false
    },
    {
        id: makeId(),
        subject: 'How are you?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et magnis dis. Libero enim sed faucibus turpis in eu. Dui faucibus in ornare quam viverra orci sagittis. Nibh praesent tristique magna sit amet.',
        isRead: true,
        sentAt: 1518998400126,
        stared: false
    },
    {
        id: makeId(),
        subject: 'Heloooooooo',
        body: 'Lets go to the movies Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et magnis dis. Libero enim sed faucibus turpis in eu. Dui faucibus in ornare quam viverra orci sagittis. Nibh praesent tristique magna sit amet.',
        isRead: false,
        sentAt: 1551133930594,
        stared: false
    },
    {
        id: makeId(),
        subject: 'Work',
        body: 'Lets go to the movies Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et magnis dis. Libero enim sed faucibus turpis in eu. Dui faucibus in ornare quam viverra orci sagittis. Nibh praesent tristique magna sit amet.',
        isRead: false,
        sentAt: 1551133930594,
        stared: false
    },
    {
        id: makeId(),
        subject: 'Your flight to London',
        body: 'Lets go to the movies Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et magnis dis. Libero enim sed faucibus turpis in eu. Dui faucibus in ornare quam viverra orci sagittis. Nibh praesent tristique magna sit amet.',
        isRead: true,
        sentAt: 1551133930594,
        stared: false
    },
    {
        id: makeId(),
        subject: 'Your free trial is over',
        body: 'Lets go to the movies Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et magnis dis. Libero enim sed faucibus turpis in eu. Dui faucibus in ornare quam viverra orci sagittis. Nibh praesent tristique magna sit amet.',
        isRead: true,
        sentAt: 1551133930594,
        stared: false
    },
    {
        id: makeId(),
        subject: 'Wedding invitation',
        body: 'Lets go to the movies Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et magnis dis. Libero enim sed faucibus turpis in eu. Dui faucibus in ornare quam viverra orci sagittis. Nibh praesent tristique magna sit amet.',
        isRead: false,
        sentAt: 1551133930594,
        stared: false
    },
    {
        id: makeId(),
        subject: 'Do Not Forget!',
        body: 'Lets go to the movies , orci sagittis. Nibh praesent tristique magna sit amet.',
        isRead: true,
        sentAt: 1551133930594,
        stared: false
    },
    {
        id: makeId(),
        subject: 'Your order is ready!',
        body: 'Lets go to the movies Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et magnis dis. Libero enim sed faucibus turpis in eu. Dui faucibus in ornare quam viverra orci sagittis. Nibh praesent tristique magna sit amet.',
        isRead: true,
        sentAt: 1551133930594,
        stared: false
    },
    {
        id: makeId(),
        subject: 'Wedding invitation',
        body: 'Lets go to the movies Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et magnis dis. Libero enim sed faucibus turpis in eu. Dui faucibus in ornare quam viverra orci sagittis. Nibh praesent tristique magna sit amet.',
        isRead: false,
        sentAt: 1551133930594,
        stared: false
    },
    {
        id: makeId(),
        subject: 'Meeting date',
        body: 'Lets go to the movies Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et magnis dis. Libero enim sed faucibus turpis in eu. Dui faucibus in ornare quam viverra orci sagittis. Nibh praesent tristique magna sit amet.',
        isRead: false,
        sentAt: 1551133930594,
        stared: false
    }
]
getEmails()

function getEmails() {
    let newEmails = storageService.load(STORAGE_KEY);
    if (!newEmails || newEmails.length === 0) {
        // newEmails = gEmails
    storageService.store(STORAGE_KEY, gEmails)
    return Promise.resolve(gEmails);

    }
    gEmails = newEmails
    return Promise.resolve(gEmails);
}

function findEmail(id) {
    let email = gEmails.find(email => {
        return email.id === id;
    })
    return Promise.resolve(email);
}

function addEmail(email) {
    let newEmail = {
        id: makeId(),
        subject: email.subject,
        body: email.body,
        isRead: false,
        sentAt: Date.now()
    }
    gEmails.unshift(newEmail);
    storageService.store(STORAGE_KEY, gEmails)
    return Promise.resolve(gEmails)
}

function toggleIsRead(id) {
    let book = gEmails.find(email => {
        return email.id === id
    })
    book.isRead = true;
    storageService.store(STORAGE_KEY, gEmails)
    return Promise.resolve(book)
}

function getUnreadEmails() {
    let unreadEmails = gEmails.filter(email => {
        return email.isRead === false;
    })
    return unreadEmails
}

function deleteEmail(id) {
    console.log('delete');
    
    let emailIdx = gEmails.findIndex(email => email.id === id);
    gEmails.splice(emailIdx, 1)
    storageService.store(STORAGE_KEY, gEmails)
}

function starEmail(id) {
    let email = gEmails.find(email => email.id === id);
    email.stared = !email.stared;
    storageService.store(STORAGE_KEY, gEmails)
    return Promise.resolve(email)
}

function markAs(id) {
    let email = gEmails.find(email => email.id === id)
    email.isRead = !email.isRead;
        storageService.store(STORAGE_KEY, gEmails)
    
}