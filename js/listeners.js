ui = function() {
  this.init = function() {
    this.currentTab = $('#logo');
    this.currentDisplay = $('#logo');
    this.stageShown = true;
    this.allLinksLoading = false;
    this.allLinksLoaded = false;
    this.collageLoaded = false;

    // data to be shown after links are loaded
    // used in a callback to genSetLinks
    this.requestToShow = function(set_data) {
      this.requestedToShow = set_data;
    }
    this.requestedToShow = undefined;
  }
}
UI = new ui();

$(document).ready(function() {

  UI.init();
// 
  $('#stage').width(($(window).width() - 240) + 'px');
  $(window).resize(function() {
    $('#stage').width(($(window).width() - 240) + 'px');
  });

  // hides current display and shows new one
  // e.g. stage, about, other info etc
  swapDisplayTo = function(id) {

    //no change
    if (id === '#' + UI.currentDisplay.attr('id')) {
      return;
      // hide current
    } else {
      UI.currentDisplay.addClass('hidden');
    }
    // show new UI.display
    var element = $(id);
    element.removeClass('hidden');
    UI.currentDisplay = element;
  }
  // $("#menu li").click(function() {
  //
  // // update tab color
  // var hit = $(this);
  // hit.addClass('selected');
  // if (UI.currentTab && hit !== UI.currentTab) {
  // UI.currentTab.removeClass('selected');
  // }
  //
  // // update UI.display
  // if (hit && hit.context) {
  // //console.log(hit.context.id);
  // }
  // // update current object
  // UI.currentTab = hit;
  // });

  UI.highlightTab = function(tab_id) {
    var hit = $(tab_id);
    hit.addClass('selected');
    if (UI.currentTab && hit !== UI.currentTab) {
      UI.currentTab.removeClass('selected');
      // reset to top for new tab
      $('body').scrollTop(0);
    }
    UI.currentTab = hit;
  }

  UI.setNavAnchor = function(str) {
    $(function() {
      // Clear the hash in the URL
      location.hash = str;

    });

  }

  UI.displayFeatured = function() {
    UI.highlightTab('#tab-featured');
    UI.setNavAnchor('featured');
    swapDisplayTo('#stage');
    displaySet(sets.featured50);
  }
  UI.displayCollage = function() {
    UI.highlightTab('#tab-collage');
    UI.setNavAnchor('collage');
    populateCollage();
    swapDisplayTo('#collage');

  }
  UI.displayPerformances = function() {
    UI.highlightTab('#tab-performances');
    UI.setNavAnchor('performances');
    swapDisplayTo('#stage');
    displaySet(sets.performances);
  }
  UI.displayPortraits = function() {
    UI.highlightTab('#tab-portraits');
    UI.setNavAnchor('portraits');
    swapDisplayTo('#stage');
    displaySet(sets.portraits);
  }
  UI.displayCats = function() {
    UI.highlightTab('#tab-cats');
    UI.setNavAnchor('cats');
    swapDisplayTo('#stage');
    displaySet(sets.cats);
  }
  UI.displayRecent = function() {
    UI.highlightTab('#tab-recent');
    UI.setNavAnchor('recent');
    swapDisplayTo('#stage');
    displaySet(sets.stream);
  }
  UI.displayAbout = function() {
    UI.highlightTab('#tab-about');
    swapDisplayTo('#about');
  }
  UI.displayRetouching = function() {
    UI.highlightTab('#tab-retouching');
    UI.setNavAnchor('retouching');
    swapDisplayTo('#retouching');
  }
  UI.displayReviews = function() {
    UI.highlightTab('#tab-reviews');
    UI.setNavAnchor('reviews');
    swapDisplayTo('#reviews');
  }
  UI.displayContact = function() {
    UI.highlightTab('#tab-contact');
    UI.setNavAnchor('contact');
    swapDisplayTo('#contact');
  }
  $('#tab-featured').click(function() {
    UI.displayFeatured();
  });

  $('#tab-collage').click(function() {
    UI.displayCollage();
  });

  $('#tab-performances').click(function() {
    UI.displayPerformances();
  });

  $('#tab-portraits').click(function() {
    UI.displayPortraits();
  });
  $('#tab-cats').click(function() {
    UI.displayCats();
  });
  $('#tab-recent').click(function() {
    UI.displayRecent();
  });
  $('#tab-about').click(function() {
    UI.displayAbout();
  });

  $('#tab-retouching').click(function() {
    UI.displayRetouching();
  });
  $('#tab-reviews').click(function() {
    UI.displayReviews();
  });
  $('#tab-contact').click(function() {
    UI.displayContact();
  });

});

// change header size on scroll
// from Wolfram <http://reference.wolfram.com/common/javascript/gl-head-scripts.en.js>
// basically if not at top, add class to shrink. Always fixed at top, only shrunk
// (window).on('load scroll resize', gl_ThrottleFunction(function() {
// // create ability to toggle the compact menu
// if ($('body.gl-header-nocompact').length > 0) {
// // don't use the compact header (the rest is done with css)
// gl_FirstRun = false;
// } else {
// // switch to compact mode when page is loaded/reloaded while scrolled down
// if (gl_FirstRun && $(window).scrollTop() > gl_HeaderFullHeight - gl_HeaderCompactHeight) {
// $('#gl-header, #gl-header-bg, #gl-header-offset').addClass('gl-compact gl-onload');
// gl_FirstRun = false;
// return;
// }
// gl_FirstRun = false;
//
// // toggle modes on scroll
// if ($(window).scrollTop() > gl_HeaderFullHeight - gl_HeaderCompactHeight) {
// // switch to compact mode when user scrolls down
// $('#gl-header, #gl-header-bg, #gl-header-offset').addClass('gl-compact');
// } else {
// // use full size mode by default and switch to it when user scrolls up
// $('#gl-header, #gl-header-bg, #gl-header-offset').removeClass('gl-compact');
// }
// }
// // emulate horizontal scroll effect on fixed position element
// $(gl_Header).offset({
// left : gl_OffsetLeft
// });
// }));
