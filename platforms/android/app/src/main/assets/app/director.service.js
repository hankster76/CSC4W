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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpcmVjdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0M7SUFEQTtRQUVZLGNBQVMsR0FBRyxJQUFJLEtBQUssQ0FDekI7WUFDSSxJQUFJLEVBQUUsV0FBVztZQUNqQixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsTUFBTSxFQUFFLGVBQWU7WUFDdkIsTUFBTSxFQUFFLEdBQUc7WUFDWCxHQUFHLEVBQUUsd3FCQUF3cUI7U0FDaHJCLEVBQ0Q7WUFDSSxJQUFJLEVBQUUsWUFBWTtZQUNsQixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLFFBQVEsRUFBRSw4QkFBOEI7WUFDeEMsS0FBSyxFQUFFLG9CQUFvQjtZQUMzQixNQUFNLEVBQUUsZUFBZTtZQUN2QixNQUFNLEVBQUUsR0FBRztZQUNYLEdBQUcsRUFBRSxpTEFBaUw7U0FDekwsRUFDRDtZQUNJLElBQUksRUFBRSxjQUFjO1lBQ3BCLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxLQUFLLEVBQUUsZUFBZTtZQUN0QixNQUFNLEVBQUUsZUFBZTtZQUN2QixNQUFNLEVBQUUsR0FBRztZQUNYLEdBQUcsRUFBRSxrSEFBa0g7U0FDMUgsRUFDRDtZQUNJLElBQUksRUFBRSxjQUFjO1lBQ3BCLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixNQUFNLEVBQUUsZUFBZTtZQUN2QixNQUFNLEVBQUUsR0FBRztZQUNYLEdBQUcsRUFBRSxvSEFBb0g7U0FDNUgsRUFDRDtZQUNJLElBQUksRUFBRSxhQUFhO1lBQ25CLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsS0FBSyxF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RUQscUNBQVcsR0FBWCxVQUFZLElBQVk7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBakpRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTtPQUNBLGVBQWUsQ0FtSjNCO0lBQUQsc0JBQUM7Q0FBQSxBQW5KRCxJQW1KQztBQW5KWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGlyZWN0b3JTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgZGlyZWN0b3JzID0gbmV3IEFycmF5PGFueT4oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIktpcmsgQm9kZVwiLCBcclxuICAgICAgICAgICAgdGl0bGU6IFwiUHJlc2lkZW50XCIsIFxyXG4gICAgICAgICAgICBpbWFnZXNyYzogXCJ+L2ltYWdlcy9EaXJlY3RvcktpcmtTTS5qcGdcIiwgXHJcbiAgICAgICAgICAgIGVtYWlsOiBcImtlYm9kZUBnbWFpbC5jb21cIiwgXHJcbiAgICAgICAgICAgIHBob25lMTogXCIoNzE5KTY1MC02Njg5XCIsXHJcbiAgICAgICAgICAgIHBob25lMjogXCIgXCIsXHJcbiAgICAgICAgICAgIGJpbzogXCJLaXJrIEJvZGUgYmVnYW4gaGlzIEplZXBpbmcgZGF5cyBub3Qgc28gbG9uZyBhZ28gaW4gTmVicmFza2Egb2YgYWxsIHBsYWNlcyBhZnRlciBwdXJjaGFzaW5nIGEgcnVzdGVkIG91dCwganVua3kgQ2hlcm9rZWUgZnJvbSBzb21lb25lJ3MgeWFyZC4gU29vbiBhZnRlciBoZSByZWFsaXplZCB0aGF0IGl0IHdhcyBhIHByZXR0eSBjYXBhYmxlIG9mZiByb2FkIHJpZyBhbmQgYmVnYW4gdGlua2VyaW5nIGFuZCBpbXByb3ZpbmcgaXQuIEFmdGVyIG1vdmluZyB0byBDb2xvcmFkbyBpbiAyMDA4LCBoZSBmb3VuZCBvdXQgd2hhdCByZWFsIG9mZiByb2FkIHRyYWlscyBhcmUgbGlrZS4gVGhlIG9sZCBydXN0eSBDaGVyb2tlZSBoYXMgYmVlbiByZXBsYWNlZCB3aXRoIGEgbmV3ZXIgb25lIHRvIHRha2UgdGhlIGFidXNlIG9mIENvbG9yYWRvJ3Mgcm9ja3MuIEtpcmsgaXMgYSBsYW5kIHN1cnZleW9yIGFuZCB3b3JrcyBmb3IgQmFycm9uIExhbmQgaW4gQ29sb3JhZG8gU3ByaW5ncy4gSGUgaXMgbWFycmllZCB0byBFcmlrYSBhbmQgdGhleSBoYXZlIDIgY2hpbGRyZW4sIFR5bGVyIGFuZCBNYXJpamtlLiBUaGV5IGFsbCBsb3ZlIHRvIGdldCBvdXQgaW4gR29kJ3MgY3JlYXRpb24gb2Z0ZW4gYW5kIHRyeSB0byBjYW1wIGluIG5ldyBwbGFjZXMuIEhlIGhvcGVzIHRvIHNlZSB5b3Ugb24gdGhlIHRyYWlscyFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkRlbm55IEhhZ2VcIiwgXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlBhc3QgUHJlc2lkZW50XCIsXHJcbiAgICAgICAgICAgIGltYWdlc3JjOiBcIn4vaW1hZ2VzL0RpcmVjdG9yRGVubnlTTS5qcGdcIiwgXHJcbiAgICAgICAgICAgIGVtYWlsOiBcImRraGFnZUBjb21jYXN0Lm5ldFwiLFxyXG4gICAgICAgICAgICBwaG9uZTE6IFwiKDcxOSkzMzItOTI3N1wiLFxyXG4gICAgICAgICAgICBwaG9uZTI6IFwiIFwiLCBcclxuICAgICAgICAgICAgYmlvOiBcIkRlbm55IGlzIHRoZSBmb3VuZGVyIG9mIENTQzRXIGFuZCB3YXMgdGhlIHByZXNpZGVudCBmb3IgMjUgeWVhcnMuICBIZSBoYXMgcmV0aXJlZCBub3cgYnV0IGhlIHN0aWxsIHNwZW5kcyBzdW1tZXJzIGluIENvbG9yYWRvIFNwcmluZ3MgYW5kIHdpbGwgbGVhZCBtYW55IHRyYWlsIHJ1bnMgdGhpcyBzZWFzb25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlRvbSBUaG9tcHNvblwiLCBcclxuICAgICAgICAgICAgdGl0bGU6IFwiU2VjcmV0YXJ5L1RyZWFzdXJlclwiLCBcclxuICAgICAgICAgICAgaW1hZ2VzcmM6IFwifi9pbWFnZXMvRGlyZWN0b3JUb21TTS5qcGdcIiwgXHJcbiAgICAgICAgICAgIGVtYWlsOiBcInRvbUBjc2M0dy5jb21cIiwgXHJcbiAgICAgICAgICAgIHBob25lMTogXCIoNzE5KTU5NC00NjU3XCIsXHJcbiAgICAgICAgICAgIHBob25lMjogXCIgXCIsXHJcbiAgICAgICAgICAgIGJpbzogXCJUb20gaXMgYW4gYXZpZCA0LXdoZWVsZXIgdGhhdCB3aWxsIGxlYWQgbWFueSBvZiB0aGUgdHJhaWxzIHRoaXMgc2Vhc29uLiAgSGUgaXMgYWxzbyBvdXIgc2VjcmV0YXJ5IGFuZCB0cmVhc3VyZXIuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgICAgXHJcbiAgICAgICAgICAgIG5hbWU6IFwiRGF2ZSBDaGxhZGVrXCIsIFxyXG4gICAgICAgICAgICB0aXRsZTogXCJEaXJlY3RvclwiLCBcclxuICAgICAgICAgICAgaW1hZ2VzcmM6IFwifi9pbWFnZXMvRGlyZWN0b3JEYXZlU00uanBnXCIsIFxyXG4gICAgICAgICAgICBlbWFpbDogXCJkY2hsYWRla0BxLmNvbVwiLCBcclxuICAgICAgICAgICAgcGhvbmUxOiBcIig3MTkpMzgyLTU5NjhcIixcclxuICAgICAgICAgICAgcGhvbmUyOiBcIiBcIixcclxuICAgICAgICAgICAgYmlvOiBcIkRhdmUgY2FuIGZyZXF1ZW50bHkgYmUgc2VlbiBsZWFkaW5nIGdyb3VwcyBpbiBNb2FiIGFuZCB3aWxsIGxlYWQgc2V2ZXJhbCBvZiB0aGUgbW9yZSBkaWZmY3VsdCBjbHViIHJ1bnMgdGhpcyB5ZWFyLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiRXJpYyBFbnNpZ25cIiwgXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkRpcmVjdG9yXCIsIFxyXG4gICAgICAgICAgICBpbWFnZXNyYzogXCJ+L2ltYWdlcy9lcmljLmpwZ1wiLCBcclxuICAgICAgICAgICAgZW1haWw6IFwiZW5zaWduQGdsb2JhbHVnLmNvbVwiLCBcclxuICAgICAgICAgICAgcGhvbmUxOiBcIig3MTkpMzMyLTc1MzdcIixcclxuICAgICAgICAgICAgcGhvbmUyOiBcIiBcIixcclxuICAgICAgICAgICAgYmlvOiBcIkVyaWMgaXMgYW4gYXZpZCB3aGVlbGVyIGFuZCBoZSB3aWxsIGJlIGEgbGVhZGVyIG9uIG1hbnkgdHJpcHMgdGhpcyB5ZWFyLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiV2FyZCBXaWxsaWFtc1wiLCBcclxuICAgICAgICAgICAgdGl0bGU6IFwiRGlyZWN0b3JcIiwgXHJcbiAgICAgICAgICAgIGltYWdlc3JjOiBcIn4vaW1hZ2VzL0RpcmVjdG9yV2FyZFNNLnBuZ1wiLCBcclxuICAgICAgICAgICAgZW1haWw6IFwid2FyZHd3aWxsaWFtc0BnbWFpbC5jb21cIiwgXHJcbiAgICAgICAgICAgIHBob25lMTogXCIoNzE5KTIxMy01OTE1XCIsXHJcbiAgICAgICAgICAgIHBob25lMjogXCIgXCIsXHJcbiAgICAgICAgICAgIGJpbzogXCJZb3Ugd2lsbCBzZWUgV2FyZCBvbiBtYW55IG9mIG91ciB0cmlwcyB3aXRoIGhpcyB2aW50YWdlIFdpbGx5J3MgSmVlcC4gIEhlIGEgc2tpbGxlZCB3aGVlbGVyIGFuZCBhIHZlcnkgZ29vZCBzcG90dGVyLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiSmltIEplbmlzdGFcIiwgXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkRpcmVjdG9yL0Jvb2sgUHVibGlzaGVyXCIsIFxyXG4gICAgICAgICAgICBpbWFnZXNyYzogXCJ+L2ltYWdlcy9EaXJlY3RvckplbmlzdGFTTS5KUEdcIiwgXHJcbiAgICAgICAgICAgIGVtYWlsOiBcImpqZW5pc3RhQGFvbC5jb21cIiwgXHJcbiAgICAgICAgICAgIHBob25lMTogXCIoNzE5KTIwMC00NzU3XCIsXHJcbiAgICAgICAgICAgIHBob25lMjogXCIgXCIsXHJcbiAgICAgICAgICAgIGJpbzogXCJKaW0gSmVuaXN0YSBhbmQgaGlzIHdpZmUgS2FyZW4gaGF2ZSBiZWVuIDQtd2hlZWxpbmcgc2luY2UgMjAwMyB3aGVuIHRoZXkgYm91Z2h0IGEgMjAwMiBMYW5kIFJvdmVyIEZyZWVsYW5kZXIgYW5kIHN0YXJ0ZWQgZXhwbG9yaW5nIHRoZSBlYXNpZXIgdHJhaWxzIG5lYXIgQ29sb3JhZG8gU3ByaW5ncy4gQml0dGVuIGJ5IHRoZSBvZmYtcm9hZGluZyBidWcgYW5kIHJlYWxpemluZyB0aGV5IG5lZWRlZCBtb3JlIHRoYW4gdGhlIEZyZWVsYW5kZXIncyA4LjEgaW5jaGVzIG9mIGNsZWFyYW5jZSwgdGhleSBub3cgZWFjaCBkcml2ZSBhbiBvcmFuZ2UgMjAwNCBMYW5kIFJvdmVyIERpc2NvdmVyeSBJSSBHNC4gSW4gYWRkaXRpb24gdG8gam9pbmluZyBhbmQgZXZlbnR1YWxseSBiZWNvbWluZyBhIERpcmVjdG9yIHdpdGggQ1NDNFcsIEppbSBpcyBvbiB0aGUgRXhlY3V0aXZlIENvbW1pdHRlZSBvZiB0aGUgU29saWh1bGwgU29jaWV0eSwgd2hpY2ggaXMgdGhlIExhbmQgUm92ZXIgQ2x1YiBvZiBDb2xvcmFkbywgd2hlcmUgaGUgY29vcmRpbmF0ZWQgdGhlIGxhc3QgNSBpdGVyYXRpb25zIG9mIHRoZSBMYW5kIFJvdmVyIE5hdGlvbmFsIFJhbGx5LiAgSmltIGlzIGEgam9pbnQgZXhlcmNpc2UgcGxhbm5lciB3aXRoIE5PUkFEIGFuZCBVU05PUlRIQ09NIGF0IFBldGVyc29uIEFGQiwgYW5kIEthcmVuIHdvcmtzIGF0IExpYnJhcnkgMjFjIHdpdGggdGhlIFBpa2VzIFBlYWsgTGlicmFyeSBEaXN0cmljdC4gVGhleSBoYXZlIDYgZ3Jvd24gY2hpbGRyZW4gKDMgb2Ygd2hvbSBhcmUgbWFycmllZCkgYW5kIDYgZ3JhbmRjaGlsZHJlbi4gVGhleSBsaXZlIGF0IHRoZSBzb3V0aGVybiBlZGdlIG9mIEJsYWNrIEZvcmVzdCBhbmQgYXR0ZW5kIGNodXJjaCBhdCBTYWludCBHYWJyaWVsIHRoZSBBcmNoYW5nZWwgaW4gdGhlIG5vcnRoZWFzdCBwYXJ0IG9mIHRvd24uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJHbGVuIEhvb3ZlclwiLCBcclxuICAgICAgICAgICAgdGl0bGU6IFwiRGlyZWN0b3JcIiwgXHJcbiAgICAgICAgICAgIGltYWdlc3JjOiBcIn4vaW1hZ2VzL0RpcmVjdG9yR2xlblNNLmpwZ1wiLCBcclxuICAgICAgICAgICAgZW1haWw6IFwiY29ydWJpMUB5YWhvby5jb21cIiwgXHJcbiAgICAgICAgICAgIHBob25lMTogXCIoNzE5KTM3MS03MzU3XCIsXHJcbiAgICAgICAgICAgIHBob25lMjogXCIgXCIsXHJcbiAgICAgICAgICAgIGJpbzogXCJJIGdvdCBpbnRlcmVzdGVkIGluIG9mZi1yb2FkaW5nIHdheSBiYWNrIGluIHRoZSA3MCdzISBBbiBhcnRpY2xlIGluIGEgbWFnYXppbmUgZGV0YWlsaW5nIENvbG9yYWRvIHRyYWlscyBpbiB0aGUgU2FuIEp1YW4gTW91bnRhaW5zIHRvdWNoZWQgYW4gYWR2ZW50dXJvdXMgY29yZCBpbiBtZSwgYW5kIHNpbmNlIEkgYWxyZWFkeSBoYWQgYSBDaGV2eSBCbGF6ZXIsIEkgaGVhZGVkIGZvciBDb2xvcmFkbyB0aGUgbmV4dCBzdW1tZXIuIEFmdGVyIHNldmVyYWwgQmxhemVycyBhbmQgYmVnaW5uaW5nIGEgZmFtaWx5LCBhbmQgc29tZSB5ZWFycyBub3QgYWJsZSB0byBnbyB0byBDb2xvcmFkbyBhdCBhbGwsIEkgYm91Z2h0IG15IGZpcnN0IEplZXAgaW4gdGhlIGxhdGUgODAncy4gSSd2ZSBzaW5jZSBvd25lZCBhIFlKLCBhIENoZXJva2VlLCAzIFRKJ3MsIGFuZCBhIEpLLiBJIHN0aWxsIGhhdmUgMiBUSidzLCBpZGVudGljYWwgcmVkIDIwMDMgUnViaWNvbidzLiBXZWxsLCBhbG1vc3QgaWRlbnRpY2FsIGV4Y2VwdCBmb3IgbW9kaWZpY2F0aW9ucyBsaWtlIGEgNC42IGxpdGVyIHN0cm9rZXIsIEZvcmQgOSBpbmNoLCBhbmQgNS41IGluY2ggbGlmdCBvbiBvbmUuIExpdmluZyBpbiBOZWJyYXNrYSB3YXMgZnJ1c3RyYXRpbmcgdG8gc2F5IHRoZSBsZWFzdCEgVXBvbiByZXRpcmVtZW50IGluIDIwMTEsIEkgZGlkbid0IGhlc2l0YXRlIHRvIG1vdmUgdG8gQ29sb3JhZG8uIFByZXZpb3VzIHRvIG1vdmluZyB0byBDb2xvcmFkbywgSSBmb3VuZCBDU0M0VyBvbmxpbmUgYW5kIGV2ZW4gdGFsa2VkIHdpdGggRGVubnkgSGFnZSBub3Qga25vd2luZyBJJ2Qgb25lIGRheSBiZSBhIENTQzRXIGRpcmVjdG9yISBJJ20gaGVyZSBieSBteXNlbGYgbm93LCBhbmQgYmVpbmcgcmV0aXJlZCwgSSBoYXZlIHRpbWUgdG8gcHJlLXJ1biB0cmFpbHMgYW5kIHRvIGJlIHNwb250YW5lb3VzIGFuZCBhYmxlIHRvIGRvIHRyYWlsIHJ1bnMgYWxtb3N0IGFueXRpbWUgc29tZW9uZSBmZWVscyB0aGUgdXJnZSB0byBnby4gTGl2aW5nIHRoZSBkcmVhbSEgSnVzdCByZW1lbWJlciBKRUVQIGFjcm9ueW0sIEp1c3QgRW1wdHkgRXZlcnkgUG9ja2V0ISBMb2xcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlBldGUgSm9obnNcIiwgXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkRpcmVjdG9yXCIsIFxyXG4gICAgICAgICAgICBpbWFnZXNyYzogXCJ+L2ltYWdlcy9EaXJlY3RvclBldGVTTS5KUEdcIiwgXHJcbiAgICAgICAgICAgIGVtYWlsOiBcInBldGVqYW1pakBNc24uY29tXCIsIFxyXG4gICAgICAgICAgICBwaG9uZTE6IFwiKDMwMyk5MDktNjcxNVwiLFxyXG4gICAgICAgICAgICBwaG9uZTI6IFwiIFwiLFxyXG4gICAgICAgICAgICBiaW86IFwiUGV0ZSBKb2hucyBncmV3IHVwIGluIHRoZSBtb3VudGFpbnMgb2YgQmFpbGV5IENvbG9yYWRvLiAgVGhlIG5lZWQgb2YgNHg0IHdhcyBhIHdheSBvZiBsaWZlIG5vdCBqdXN0IGEgaG9iYnkuIENhbXBpbmcgYW5kIGZvdXIgd2hlZWxpbmcgYmVjYW1lIGEgZmF2b3JpdGUgcGFzdCB0aW1lIHdpdGggaGlzIHdpZmUsICBKYW1pIGFuZCB0aGVpciB0d28gY2hpbGRyZW4gWmFjIGFuZCBBbHlzc2EuIFRoZSBkZXNpcmUgdG8gam9pbiBhIDR4NCBjbHViIGJyb3VnaHQgdXMgdG8gYmUgYWN0aXZlIHdpdGggQ1NDNFcuIFdlIHNvb24gbWV0IG1hbnkgd29uZGVyZnVsIHBlb3BsZSB3aXRoIHNpbWlsYXIgaW50ZXJlc3RzLiBQZXRlIGhhcyBiZWVuIHdpdGggQ1NDNFcgYXMgYSBtZW1iZXIgc3RhcnRpbmcgaW4gMjAwMiBhbmQgYSBkaXJlY3RvciBhIGZldyB5ZWFycyBhZnRlcndhcmQuIFBldGUgbG92ZXMgc2hhcmluZyBoaXMgbG92ZSBmb3IgdGhlIG91dGRvb3JzIHdpdGggb3RoZXJzIHdoaWxlIGVuam95aW5nIHRoZSBjaGFsbGVuZ2Ugb2YgZm91ciB3aGVlbGluZy5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkVybmllIEh1Z2hlc1wiLCBcclxuICAgICAgICAgICAgdGl0bGU6IFwiRGlyZWN0b3JcIiwgXHJcbiAgICAgICAgICAgIGltYWdlc3JjOiBcIn4vaW1hZ2VzL2VybmllLmpwZ1wiLCBcclxuICAgICAgICAgICAgZW1haWw6IFwiYjRyZWFsMjEyQGdtYWlsLmNvbVwiLCBcclxuICAgICAgICAgICAgcGhvbmUxOiBcIig3MTkpMjAwLTQ4MDBcIixcclxuICAgICAgICAgICAgcGhvbmUyOiBcIiBcIixcclxuICAgICAgICAgICAgYmlvOiBcIktlZXAgd2F0Y2ggZm9yIEVybmllIHdoZW4geW91IGFyZSBpbiBNb2FiLiAgSGUgaXMgYSBwYXJ0bmVyIGluIE91dGxhdyBKZWVwIEFkdmVudHVyZXMgYW5kIHdpbGwgZnJlcXVlbmx0eSBiZSBzZWVuIGxlYWRpbmcgZ3JvdXBzIG9uIHRoZSBtb3N0IGNoYWxsZW5naW5nIHRyYWlscy5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkdsZW5uIEhlc3NcIiwgXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkRpcmVjdG9yXCIsIFxyXG4gICAgICAgICAgICBpbWFnZXNyYzogXCJ+L2ltYWdlcy9EaXJlY3RvckdsZW5uU00uanBnXCIsIFxyXG4gICAgICAgICAgICBlbWFpbDogXCJnbGVubmhlc3M2NkBnbWFpbC5jb21cIiwgXHJcbiAgICAgICAgICAgIHBob25lMTogXCI3MjAtMjE5LTUzODRcIixcclxuICAgICAgICAgICAgcGhvbmUyOiBcIiBcIixcclxuICAgICAgICAgICAgYmlvOiBcIkdsZW5uIGlzIG5vdCBvbmx5IGFuIGF2aWQgd2hlZWxlciBhbmQgZ3JlYXQgdHJhaWwgbGVhZGVyLCBoZSBhbHNvIHNwZW5kcyBhIGxvdCBvZiB0aW1lIG9uIGhpcyBkaXJ0IGJpa2UgdG91cmluZyBhcm91bmQgdGhlIHN0YXRlLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiSmVyZW15IFJvd2FuXCIsIFxyXG4gICAgICAgICAgICB0aXRsZTogXCJEaXJlY3Rvci9GYWNlYm9vayBBZG1pbmlzdHJhdG9yXCIsIFxyXG4gICAgICAgICAgICBpbWFnZXNyYzogXCJ+L2ltYWdlcy9EaXJlY3RvckplcmVteVNNLmpwZ1wiLCBcclxuICAgICAgICAgICAgZW1haWw6IFwianJvd2FuMTk3OUBnbWFpbC5jb21cIiwgXHJcbiAgICAgICAgICAgIHBob25lMTogXCIoNzE5KTIwNS0yNTY1XCIsXHJcbiAgICAgICAgICAgIHBob25lMjogXCIgXCIsXHJcbiAgICAgICAgICAgIGJpbzogXCJKZXJlbXkgY2FuIGJlIHNlZW4gbGVhZGluZyBncm91cHMgYXJvdW5kIGluIE1vYWIsIFV0YWguICBIZSBpcyBhIHBhcnRuZXIgaW4gT3V0bGF3IEplZXAgQWR2ZW50dXJlcyBhbmQgc3BlbmRzIG1vc3Qgb2YgaGlzIHRpbWUgaW4gTW9hYi4gIEplcmVteSBpcyB0aGUgbWFuIHRvIHNlZSBpZiB5b3Ugd2FudCB0byBoYXZlIGEgZ29vZCB3aGVlbGluZyBleHBlcmllbmNlIHdoZW4geW91IHZpc2l0IE1vYWIhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJEYW4gTWl0Y2hlbGxcIiwgXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkRpcmVjdG9yL1dlYm1hc3RlclwiLCBcclxuICAgICAgICAgICAgaW1hZ2VzcmM6IFwifi9pbWFnZXMvRGlyZWN0b3JEYW5TTS5qcGdcIiwgXHJcbiAgICAgICAgICAgIGVtYWlsOiBcImNzYzR3QGNzYzR3LmNvbVwiLCBcclxuICAgICAgICAgICAgcGhvbmUxOiBcIig3MTkpMjEwLTE2NDRcIixcclxuICAgICAgICAgICAgcGhvbmUyOiBcIiBcIixcclxuICAgICAgICAgICAgYmlvOiBcIkRhbiBpcyBhbiBhdmlkIHdoZWVsZXIgYW5kIHlvdSB3aWxsIHNlZSBoaW0gYW5kIGhpcyB3aWZlIE1pY2hlbGxlIG9uIG1hbnkgdHJpcHMgdGhpcyB5ZWFyLiAgXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJKYXNvbiBTZWxsZXJzXCIsIFxyXG4gICAgICAgICAgICB0aXRsZTogXCJEaXJlY3RvclwiLCBcclxuICAgICAgICAgICAgaW1hZ2VzcmM6IFwifi9pbWFnZXMvamFzb24uanBnXCIsIFxyXG4gICAgICAgICAgICBlbWFpbDogXCJqYXNvbnNlbGxlcnM3M0B5YWhvby5jb21cIiwgXHJcbiAgICAgICAgICAgIHBob25lMTogXCIoOTU0KTgwNS0zNjYwXCIsXHJcbiAgICAgICAgICAgIHBob25lMjogXCIgXCIsXHJcbiAgICAgICAgICAgIGJpbzogXCJKYXNvbiBpcyBhIG5ldyBkaXJlY3RvciB0aGlzIHllYXIgc28gbWFrZSBzdXJlIHRvIGludHJvZHVjZSB5b3Vyc2VsZiB0byBoaW0gYXQgdGhlIG1lZXRpbmcgb3Igb24gdGhlIHRyYWlsLlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiRHVhbmUgTG95ZFwiLCBcclxuICAgICAgICAgICAgdGl0bGU6IFwiRGlyZWN0b3JcIiwgXHJcbiAgICAgICAgICAgIGltYWdlc3JjOiBcIn4vaW1hZ2VzL2R1YW5lLmpwZ1wiLCBcclxuICAgICAgICAgICAgZW1haWw6IFwiZHVhbmVsQHRydXRodG90cmFuc2Zvcm1hdGlvbi5jb21cIiwgXHJcbiAgICAgICAgICAgIHBob25lMTogXCIoNzE5KTY1OS0wNTkyXCIsXHJcbiAgICAgICAgICAgIHBob25lMjogXCIgXCIsXHJcbiAgICAgICAgICAgIGJpbzogXCJEdWFuZSBpcyBhIG5ldyBkaXJlY3RvciB0aGlzIHllYXIgc28gbWFrZSBzdXJlIHRvIGludHJvZHVjZSB5b3Vyc2VsZiB0byBoaW0gYXQgdGhlIG1lZXRpbmcgb3Igb24gdGhlIHRyYWlsLlwiXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBnZXREaXJlY3RvcnMoKTogYW55W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdG9ycztcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3RvcihuYW1lOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdG9ycy5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpWzBdO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19