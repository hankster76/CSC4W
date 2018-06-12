"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var director_service_1 = require("../director.service");
var DirectorsComponent = /** @class */ (function () {
    function DirectorsComponent(router, directorService) {
        this.router = router;
        this.directorService = directorService;
    }
    DirectorsComponent.prototype.ngOnInit = function () {
        this.directors = this.directorService.getDirectors();
    };
    DirectorsComponent.prototype.navigateToDetails = function (name) {
        this.router.navigate([
            '/home', { outlets: { directoroutlet: ['directors', name] } }
        ]);
    };
    DirectorsComponent = __decorate([
        core_1.Component({
            selector: 'my-directors',
            templateUrl: './directors/directors.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, director_service_1.DirectorService])
    ], DirectorsComponent);
    return DirectorsComponent;
}());
exports.DirectorsComponent = DirectorsComponent;
