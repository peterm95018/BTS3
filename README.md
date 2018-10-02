# BTS3
10/2/18 - I pulled this down and built it again to try an understand where I last topped on this project. It looks like swapping out the map library was the primary change. The UI got a little work as well.
@TODO - review v3 again and see if there's enough working to put effort into bringing a better working version into product. Note that we've just fixed the BTS2 version through upgrades to libraries and Angular versions.

An updated BTS App with current versions and upgradeability via bower and npm.
I've upgraded the following libraries:
- angular
- angular-google-maps is no longer supported. I upgraded to ngmap.
- angular material
- angular material icons
- desktop web notification
- JSON3
- SVG Morpheus


## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
