$(document).click(function(event) {
      const clickover = $(event.target);
      const $navbar = $(".navbar-collapse");
      const _opened = $navbar.hasClass("show");

      if (_opened && !clickover.hasClass("navbar-toggler") && $navbar.has(event.target).length === 0) {
        $navbar.collapse('hide');
      }
    });