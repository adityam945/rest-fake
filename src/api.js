const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json([{
    subcode: "17CS46",
    subname: "DATA COMMUNICATION ",
    m1: "Module 1",
    m1desc:
      "Introduction: \n Data Communications, Networks, Network Types, Internet History, Standards and Administration,\n\n Networks Models:\n Protocol Layering,  TCP/IP Protocol suite, The OSI model,\n\n Introduction to Physical Layer-1: \n Data and Signals, Digital Signals, Transmission Impairment, Data Rate limits, Performance,\n\n Digital Transmission:\n Digital to digital conversion (Only Line coding: Polar, Bipolar and Manchester coding). ",
    m2: "Module 2",
    m2desc:
      "Physical Layer-2:\n Analog to digital conversion (only PCM), Transmission Modes,\n\n Analog Transmission:\n Digital to analog conversion,\n\n Bandwidth Utilization: \n Multiplexing and Spread Spectrum, \n\n Switching: \n Introduction, Circuit Switched Networks and Packet switching",
    m3: "Module 3",
    m3desc:
      "Error Detection and Correction: \n Introduction, Block coding, Cyclic codes, Checksum, Forward error correction, \n\n Data link control:\n DLC services, Data link layer protocols, HDLC, and Point to Point protocol (Framing, Transition phases only). ",
    m4: "Module 4",
    m4desc:
      "Media Access control:\n Random Access, Controlled Access and Channelization,\n\n Wired LANs Ethernet: \n Ethernet Protocol, Standard Ethernet, Fast Ethernet, Gigabit Ethernet and 10 Gigabit Ethernet, \n\n Wireless LANs: \n Introduction, IEEE 802.11 Project and Bluetooth. ",
    m5: "Module 5",
    m5desc:
      "Other wireless Networks: \n WIMAX, Cellular Telephony, Satellite networks,  \n\n Network layer Protocols :\n Internet Protocol, ICMPv4,Mobile IP, \n\n Next generation IP: \n IPv6 addressing, The IPv6 Protocol, The ICMPv6 Protocol and Transition from  IPv4 to  IPv6. ",
    descname: "Prescribed text books",
    descdata:
      "Text  Book:\n Behrouz A. Forouzan, Data Communications and Networking 5E, 5th Edition, Tata McGraw-Hill, 2013. (Chapters 1.1 to 1.5, 2.1 to 2.3, 3.1, 3.3 to 3.6, 4.1 to 4.3, 5.1, 6.1, 6.2, 8.1 to 8.3, 10.1 to 10.5, 11.1 to 11.4, 12.1 to 12.3, 13.1 to 13.5, 15.1 to 15.3, 16.1 to 16.3, 19.1 to 19.3, 22.1 to 22.4)\n\n Reference Books:\n 1. Alberto Leon-Garcia and Indra Widjaja: Communication Networks - Fundamental Concepts and Key architectures, 2nd Edition Tata McGraw-Hill, 2004. \n 2. William Stallings: Data and Computer Communication, 8th Edition, Pearson Education, 2007.\n  3. Larry L. Peterson and Bruce S. Davie: Computer Networks – A Systems Approach, 4th   Edition, Elsevier, 2007. \n 4. Nader F. Mir: Computer and Communication Networks, Pearson Education, 2007 ",
  }]);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
