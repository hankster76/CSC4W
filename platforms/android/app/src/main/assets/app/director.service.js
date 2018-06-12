"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DirectorService = /** @class */ (function () {
    function DirectorService() {
        this.directors = new Array({
            name: "Kirk Bode",
            title: "President",
            imagesrc: "~/images/DirectorKirkSM.jpg",
            email: "kebode@gmail.com",
            phone1: "(719)650-6689",
            phone2: " ",
            bio: "Kirk Bode began his Jeeping days not so long ago in Nebraska of all places after purchasing a rusted out, junky Cherokee from someone's yard. Soon after he realized that it was a pretty capable off road rig and began tinkering and improving it. After moving to Colorado in 2008, he found out what real off road trails are like. The old rusty Cherokee has been replaced with a newer one to take the abuse of Colorado's rocks. Kirk is a land surveyor and works for Barron Land in Colorado Springs. He is married to Erika and they have 2 children, Tyler and Marijke. They all love to get out in God's creation often and try to camp in new places. He hopes to see you on the trails!"
        }, {
            name: "Denny Hage",
            title: "Past President",
            imagesrc: "~/images/DirectorDennySM.jpg",
            email: "dkhage@comcast.net",
            phone1: "(719)332-9277",
            phone2: " ",
            bio: "Denny is the founder of CSC4W and was the president for 25 years.  He has retired now but he still spends summers in Colorado Springs and will lead many trail runs this season"
        }, {
            name: "Tom Thompson",
            title: "Secretary/Treasurer",
            imagesrc: "~/images/DirectorTomSM.jpg",
            email: "tom@csc4w.com",
            phone1: "(719)594-4657",
            phone2: " ",
            bio: "Tom is an avid 4-wheeler that will lead many of the trails this season.  He is also our secretary and treasurer."
        }, {
            name: "Dave Chladek",
            title: "Director",
            imagesrc: "~/images/DirectorDaveSM.jpg",
            email: "dchladek@q.com",
            phone1: "(719)382-5968",
            phone2: " ",
            bio: "Dave can frequently be seen leading groups in Moab and will lead several of the more diffcult club runs this year."
        }, {
            name: "Eric Ensign",
            title: "Director",
            imagesrc: "~/images/eric.jpg",
            email: "ensign@globalug.com",
            phone1: "(719)332-7537",
            phone2: " ",
            bio: "Eric is an avid wheeler and he will be a leader on many trips this year."
        }, {
            name: "Ward Williams",
            title: "Director",
            imagesrc: "~/images/DirectorWardSM.png",
            email: "wardwwilliams@gmail.com",
            phone1: "(719)213-5915",
            phone2: " ",
            bio: "You will see Ward on many of our trips with his vintage Willy's Jeep.  He a skilled wheeler and a very good spotter."
        }, {
            name: "Jim Jenista",
            title: "Director/Book Publisher",
            imagesrc: "~/images/DirectorJenistaSM.JPG",
            email: "jjenista@aol.com",
            phone1: "(719)200-4757",
            phone2: " ",
            bio: "Jim Jenista and his wife Karen have been 4-wheeling since 2003 when they bought a 2002 Land Rover Freelander and started exploring the easier trails near Colorado Springs. Bitten by the off-roading bug and realizing they needed more than the Freelander's 8.1 inches of clearance, they now each drive an orange 2004 Land Rover Discovery II G4. In addition to joining and eventually becoming a Director with CSC4W, Jim is on the Executive Committee of the Solihull Society, which is the Land Rover Club of Colorado, where he coordinated the last 5 iterations of the Land Rover National Rally.  Jim is a joint exercise planner with NORAD and USNORTHCOM at Peterson AFB, and Karen works at Library 21c with the Pikes Peak Library District. They have 6 grown children (3 of whom are married) and 6 grandchildren. They live at the southern edge of Black Forest and attend church at Saint Gabriel the Archangel in the northeast part of town."
        }, {
            name: "Glen Hoover",
            title: "Director",
            imagesrc: "~/images/DirectorGlenSM.jpg",
            email: "corubi1@yahoo.com",
            phone1: "(719)371-7357",
            phone2: " ",
            bio: "I got interested in off-roading way back in the 70's! An article in a magazine detailing Colorado trails in the San Juan Mountains touched an adventurous cord in me, and since I already had a Chevy Blazer, I headed for Colorado the next summer. After several Blazers and beginning a family, and some years not able to go to Colorado at all, I bought my first Jeep in the late 80's. I've since owned a YJ, a Cherokee, 3 TJ's, and a JK. I still have 2 TJ's, identical red 2003 Rubicon's. Well, almost identical except for modifications like a 4.6 liter stroker, Ford 9 inch, and 5.5 inch lift on one. Living in Nebraska was frustrating to say the least! Upon retirement in 2011, I didn't hesitate to move to Colorado. Previous to moving to Colorado, I found CSC4W online and even talked with Denny Hage not knowing I'd one day be a CSC4W director! I'm here by myself now, and being retired, I have time to pre-run trails and to be spontaneous and able to do trail runs almost anytime someone feels the urge to go. Living the dream! Just remember JEEP acronym, Just Empty Every Pocket! Lol"
        }, {
            name: "Pete Johns",
            title: "Director",
            imagesrc: "~/images/DirectorPeteSM.JPG",
            email: "petejamij@Msn.com",
            phone1: "(303)909-6715",
            phone2: " ",
            bio: "Pete Johns grew up in the mountains of Bailey Colorado.  The need of 4x4 was a way of life not just a hobby. Camping and four wheeling became a favorite past time with his wife,  Jami and their two children Zac and Alyssa. The desire to join a 4x4 club brought us to be active with CSC4W. We soon met many wonderful people with similar interests. Pete has been with CSC4W as a member starting in 2002 and a director a few years afterward. Pete loves sharing his love for the outdoors with others while enjoying the challenge of four wheeling."
        }, {
            name: "Ernie Hughes",
            title: "Director",
            imagesrc: "~/images/ernie.jpg",
            email: "b4real212@gmail.com",
            phone1: "(719)200-4800",
            phone2: " ",
            bio: "Keep watch for Ernie when you are in Moab.  He is a partner in Outlaw Jeep Adventures and will frequenlty be seen leading groups on the most challenging trails."
        }, {
            name: "Glenn Hess",
            title: "Director",
            imagesrc: "~/images/DirectorGlennSM.jpg",
            email: "glennhess66@gmail.com",
            phone1: "720-219-5384",
            phone2: " ",
            bio: "Glenn is not only an avid wheeler and great trail leader, he also spends a lot of time on his dirt bike touring around the state."
        }, {
            name: "Jeremy Rowan",
            title: "Director/Facebook Administrator",
            imagesrc: "~/images/DirectorJeremySM.jpg",
            email: "jrowan1979@gmail.com",
            phone1: "(719)205-2565",
            phone2: " ",
            bio: "Jeremy can be seen leading groups around in Moab, Utah.  He is a partner in Outlaw Jeep Adventures and spends most of his time in Moab.  Jeremy is the man to see if you want to have a good wheeling experience when you visit Moab!"
        }, {
            name: "Dan Mitchell",
            title: "Director/Webmaster",
            imagesrc: "~/images/DirectorDanSM.jpg",
            email: "csc4w@csc4w.com",
            phone1: "(719)210-1644",
            phone2: " ",
            bio: "Dan is an avid wheeler and you will see him and his wife Michelle on many trips this year.  "
        }, {
            name: "Jason Sellers",
            title: "Director",
            imagesrc: "~/images/jason.jpg",
            email: "jasonsellers73@yahoo.com",
            phone1: "(954)805-3660",
            phone2: " ",
            bio: "Jason is a new director this year so make sure to introduce yourself to him at the meeting or on the trail."
        }, {
            name: "Duane Loyd",
            title: "Director",
            imagesrc: "~/images/duane.jpg",
            email: "duanel@truthtotransformation.com",
            phone1: "(719)659-0592",
            phone2: " ",
            bio: "Duane is a new director this year so make sure to introduce yourself to him at the meeting or on the trail."
        });
    }
    DirectorService.prototype.getDirectors = function () {
        return this.directors;
    };
    DirectorService.prototype.getDirector = function (name) {
        return this.directors.filter(function (item) { return item.name === name; })[0];
    };
    DirectorService = __decorate([
        core_1.Injectable()
    ], DirectorService);
    return DirectorService;
}());
exports.DirectorService = DirectorService;
