/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*  A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('url defined', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
         });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name defined', function() {
            for (let feed of allFeeds)  {
              expect(name).toBeDefined(true);
              expect(name.length).not.toBe();
         };
    });


    /* The menu suite test*/
    describe('The menu', function() {


        /* A test that ensures the menu element is
         * hidden by default.
         */
         it('is hidden', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');
            expect(body.classList.contains('menu-hidden')).toBe(true);
         });


         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('toggles on and off', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

          // click the menu
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);

          // click menu again
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);

          });

    });
    /* Initial Entries suite test" */
    describe('Initial Entries', function() {
        document.querySelectorAll('.parent .child');

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done) {
            loadFeed(0, done);
         });

         it('completes work', function() {
            const feed = document.querySelector('.feed');
            expect(feed.children.length > 0).toBe(true);
         });
    });
    /* A new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        const feed = document.querySelector('.feed');
        const firstFeed = [];

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         let feedAfterFirstLoad;
         let feedAfterSecondLoad;

         beforeEach(function(done) {
           //Begin leadFeed(0)
            loadFeed(0, function() {
              Array.from(feed.children).forEach(function(entry) {
                firstFeed.push(entry.innerText);
              });

              // loadFeed(0) finished, loadFeed will now run
              loadFeed(1, function() {
                Array.from(feed.children).forEach(function(entry) {
                  firstFeed.push(entry.innerText);
                });
              }); //END loadFeed(1)
            }); //END loadFeed(0)

         it('content changes', function() {
            Array.from(feed.children).forEach(function(entry, index) {
                expect(feedAfterFirstLoad).not.toEqual(feedAfterSecondLoad);
              });
            });
          }); //END beforeEach
        }); //END describe
      }); //END describe
    }); //END $function
