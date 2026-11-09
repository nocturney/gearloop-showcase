/* GearLoop independent public showcase seed. All entities, events and amounts are fictitious. */
window.GEAR_DEMO_SEED = {
  bookings:[
    {id:"GL-26091",title:"כנס Future Forward",client:"סטודיו נובה",venue:"מרכז הכנסים A",start:"2026-11-09",end:"2026-11-11",status:"יצא לשטח",amount:68400,owner:"דנה ר.",equipment:["CAM-03","LGT-01","AUD-02"],team:8,readiness:100},
    {id:"GL-26092",title:"השקת מוצר — Horizon",client:"קבוצת אופק",venue:"חלל אירועים B",start:"2026-11-10",end:"2026-11-12",status:"ליקוט",amount:92750,owner:"עומר ל.",equipment:["LGT-02","AUD-01","STG-01"],team:12,readiness:78},
    {id:"GL-26093",title:"צילום קמפיין חורף",client:"פריים קריאייטיב",venue:"סטודיו 04",start:"2026-11-12",end:"2026-11-13",status:"מאושר",amount:18900,owner:"מיכל ס.",equipment:["CAM-01","CAM-02","LGT-03"],team:5,readiness:54},
    {id:"GL-26094",title:"פסטיבל העיר — במה מרכזית",client:"הפקות סולאר",venue:"מתחם פתוח C",start:"2026-11-13",end:"2026-11-16",status:"מאושר",amount:148200,owner:"דנה ר.",equipment:["AUD-01","STG-01","PWR-01"],team:18,readiness:62},
    {id:"GL-26095",title:"אירוע חברה סוף שנה",client:"מעבדות אטלס",venue:"אולם כנסים D",start:"2026-11-16",end:"2026-11-17",status:"טיוטה",amount:34300,owner:"עומר ל.",equipment:["LGT-01","AUD-02"],team:6,readiness:35},
    {id:"GL-26096",title:"הופעת Live Session",client:"סאונד קולקטיב",venue:"האנגר 08",start:"2026-11-08",end:"2026-11-10",status:"יצא לשטח",amount:41500,owner:"מיכל ס.",equipment:["AUD-01","LGT-02"],team:7,readiness:100},
    {id:"GL-26097",title:"מתחם תערוכה מודולרי",client:"מטרו דיזיין",venue:"אולם 3",start:"2026-11-17",end:"2026-11-20",status:"מאושר",amount:86500,owner:"דנה ר.",equipment:["STG-02","LGT-03"],team:10,readiness:47},
    {id:"GL-26098",title:"צילום אירוע קהילה",client:"סיטי מדיה",venue:"חלל 12",start:"2026-11-06",end:"2026-11-08",status:"הוחזר",amount:12900,owner:"עומר ל.",equipment:["CAM-01"],team:3,readiness:100}
  ],
  equipment:[
    {id:"CAM-01",name:"Sony FX6 · Cinema Line",category:"צילום",total:8,available:5,warehouse:"ראשי",daily:520,health:98},
    {id:"CAM-02",name:"Blackmagic ATEM Mini Extreme",category:"צילום",total:6,available:4,warehouse:"ראשי",daily:350,health:100},
    {id:"CAM-03",name:"DJI Ronin RS 4 Pro",category:"צילום",total:12,available:8,warehouse:"מערב",daily:220,health:94},
    {id:"LGT-01",name:"Aputure LS 600d Pro",category:"תאורה",total:24,available:14,warehouse:"ראשי",daily:190,health:97},
    {id:"LGT-02",name:"Astera Titan Tube · 8 Pack",category:"תאורה",total:16,available:6,warehouse:"מערב",daily:480,health:91},
    {id:"LGT-03",name:"ARRI SkyPanel S60-C",category:"תאורה",total:18,available:11,warehouse:"ראשי",daily:310,health:95},
    {id:"AUD-01",name:"d&b Y7P · PA System",category:"סאונד",total:36,available:13,warehouse:"ראשי",daily:265,health:96},
    {id:"AUD-02",name:"Shure ULX-D Wireless",category:"סאונד",total:22,available:14,warehouse:"מזרח",daily:165,health:100},
    {id:"AUD-03",name:"Yamaha CL5 Digital Console",category:"סאונד",total:4,available:2,warehouse:"ראשי",daily:950,health:100},
    {id:"STG-01",name:"Prolyte H30V Truss · 3m",category:"במה",total:80,available:34,warehouse:"מערב",daily:45,health:99},
    {id:"STG-02",name:"Stage Deck 2×1m",category:"במה",total:120,available:78,warehouse:"מערב",daily:60,health:98},
    {id:"PWR-01",name:"Generator 40 kVA",category:"חשמל",total:5,available:2,warehouse:"חוץ",daily:880,health:82},
    {id:"PWR-02",name:"Power Distro 63A",category:"חשמל",total:20,available:12,warehouse:"מזרח",daily:110,health:93},
    {id:"VID-01",name:"Novastar VX1000 Processor",category:"וידאו",total:9,available:7,warehouse:"ראשי",daily:430,health:100},
    {id:"VID-02",name:"LED Panel 2.6mm",category:"וידאו",total:180,available:86,warehouse:"מערב",daily:95,health:98},
    {id:"RIG-01",name:"Kupo Master Stand",category:"גריפ",total:42,available:31,warehouse:"מזרח",daily:35,health:99}
  ],
  kits:[
    {id:"KIT-01",name:"Studio Pro · Cinema",category:"צילום",components:[["CAM-01",2],["LGT-01",4],["CAM-03",1]],note:"חבילת צילום מקצועית — שתי מצלמות, גריפ ותאורה"},
    {id:"KIT-02",name:"Event Stage · Essential",category:"הפקה",components:[["STG-01",12],["STG-02",18],["AUD-01",8],["PWR-02",2]],note:"במה, סאונד ותשתיות לחבילת אירוע בינונית"},
    {id:"KIT-03",name:"Live Broadcast · Hybrid",category:"שידור",components:[["CAM-01",3],["CAM-02",1],["AUD-02",4],["VID-01",1]],note:"צילום רב-מצלמתי והזרמת תוכן בזמן אמת (סימולציה)"}
  ],
  vehicles:[
    {id:"TR-01",name:"משאית 12 טון",plate:"DEMO-804",driver:"איתי ש.",load:78,status:"בדרך לאירוע",route:"מחסן ← מתחם A",eta:"14:30"},
    {id:"TR-02",name:"מסחרית L2H2",plate:"DEMO-117",driver:"ליאור מ.",load:42,status:"בליקוט",route:"מחסן מערב",eta:"16:00"},
    {id:"TR-03",name:"משאית 7.5 טון",plate:"DEMO-509",driver:"רועי כ.",load:91,status:"בדרך לאירוע",route:"מחסן ← חלל B",eta:"17:15"},
    {id:"TR-04",name:"מסחרית ציוד",plate:"DEMO-262",driver:"נטע ר.",load:0,status:"זמין",route:"מחסן ראשי",eta:"—"}
  ],
  tasks:[
    {id:"TASK-1",title:"סריקת סריאלים — ציוד צילום",project:"Future Forward",owner:"טל",due:"היום · 10:00",done:false,priority:"גבוה"},
    {id:"TASK-2",title:"אישור רשימת ציוד והצלבות",project:"Horizon",owner:"מיכל",due:"היום · 11:30",done:false,priority:"גבוה"},
    {id:"TASK-3",title:"בדיקת גנרטור לפני יציאה",project:"פסטיבל העיר",owner:"איתי",due:"היום · 13:00",done:false,priority:"קריטי"},
    {id:"TASK-4",title:"אישור תוכנית הובלה",project:"Future Forward",owner:"דנה",due:"היום · 14:00",done:true,priority:"רגיל"},
    {id:"TASK-5",title:"החזרת מיקרופונים למחסן",project:"Live Session",owner:"רועי",due:"מחר · 09:00",done:false,priority:"רגיל"},
    {id:"TASK-6",title:"הכנת ציוד תאורה",project:"צילום קמפיין חורף",owner:"טל",due:"מחר · 12:00",done:false,priority:"רגיל"}
  ],
  alerts:[
    {id:"AL-1",level:"danger",title:"נדרשת בדיקת בטיחות לציוד",detail:"Generator 40 kVA · בדיקה תקופתית קרובה",related:"PWR-01"},
    {id:"AL-2",level:"warning",title:"עומס על מלאי Astera Titan",detail:"זמינות נמוכה ביחס להזמנות הקרובות",related:"LGT-02"},
    {id:"AL-3",level:"info",title:"הזמנה מוכנה לאיסוף",detail:"GL-26091 · כל פריטי הליקוט אומתו",related:"GL-26091"}
  ],
  quotes:[
    {id:"QT-1048",client:"קבוצת אופק",title:"השקת מוצר — Horizon",amount:92750,status:"נשלח",updated:"09.11.26"},
    {id:"QT-1049",client:"פריים קריאייטיב",title:"צילום קמפיין חורף",amount:18900,status:"אושר",updated:"08.11.26"},
    {id:"QT-1050",client:"מעבדות אטלס",title:"אירוע חברה סוף שנה",amount:34300,status:"טיוטה",updated:"09.11.26"},
    {id:"QT-1051",client:"סאונד קולקטיב",title:"Live Session",amount:41500,status:"אושר",updated:"07.11.26"}
  ],
  revenue:[38,51,46,64,58,77,72,91,84,105,98,124],
  recent:[
    {text:"הזמנת GL-26091 הועברה לשטח",when:"לפני 12 דקות",type:"ok"},
    {text:"בוצעה סריקת ציוד למחסן הראשי",when:"לפני 34 דקות",type:"neutral"},
    {text:"טיוטת הצעה QT-1050 נשמרה",when:"לפני שעה",type:"neutral"},
    {text:"זוהתה התראת זמינות לתאורה",when:"לפני שעתיים",type:"warning"}
  ]
};