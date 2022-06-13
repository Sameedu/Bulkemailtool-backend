require('dotenv').config();
const Group = require('../models/Group');
const Customer = require('../models/Customer');
const dateTime = require('node-datetime');

var dt = dateTime.create();
var date_timefmt= dt.format('m_d_Y-H_M_S');

const DOMAIN = process.env.MAILGUN_DOMAIN;
const formData = require('form-data');
const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);

const client = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY || '' });

exports.createmailgroup = async (req,res,next) => {
    const {mgroup_name, mgroup_description}  = req.body

        try {
          const newList = await client.lists.create({
            address: `${mgroup_name}@${DOMAIN}`,
            name: `${mgroup_name}`,
            description: `${mgroup_description}`,
            access_level: "everyone", // readonly (default), members, everyone
          });
          console.log('newList', newList);
          res.send(newList);
        } catch (error) {
          console.error(error);
          res.status(500).send(error)
        }

}

exports.listmailgroup = async (req,res,next) => {

    try {
            const listsArray = await client.lists.list();
            console.log('lists', listsArray);
            res.send(listsArray);
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
}


exports.listemailgroupmembers = async (req,res,next) => {
        try {
            const groupid = req.params.groupid
            const listingMembers = await client.lists.members.listMembers(`${groupid}@${DOMAIN}`);
            console.log('listingMembers', listingMembers);
            res.send(listingMembers);
          } catch (error) {
            console.error(error);
            res.status(500).send(error)
          }
}

exports.deletemailgroup = async (req,res,next) => {
      try {
        const groupid = req.params.groupid
        const removedList = await client.lists.destroy(`${groupid}@${DOMAIN}`);
        console.log('removedList', removedList);

        res.send(removedList);
      } catch (error) {
        console.error(error);
        res.status(500).send(error)
      }

}

exports.addmemebers = async (req,res,next) => {
  const {newMembersList}  = req.body

      try {
        const groupid = req.params.groupid
        const newMembers = await client.lists.members.createMembers(
          `${groupid}@${DOMAIN}`,
          {
          members: newMembersList,
          vars: JSON.stringify({ age: 27 }),
          subscribed: 'yes',
          upsert: 'yes'
          }
        );
        console.log('newMembers', newMembers);
        res.send(newMembers);
      } catch (error) {
        console.error(error);
        res.status(500).send(error)
      }

}

exports.deletemembers = async (req,res,next) => {
  const {deleteMembersList}  = req.body

      try {
        const groupid = req.params.groupid
        let memberlist=[]
        deleteMembersList.map(async (e) => {
        const deletedMember = await client.lists.members.destroyMember(`${groupid}@${DOMAIN}`, e.address);
        console.log('deletedMember', deletedMember);
      })

        res.send("Successfully Deleted");
      } catch (error) {
        console.error(error);
        res.status(500).send(error)
      }

}









