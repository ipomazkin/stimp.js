import { App, DOMInteractModule } from '../../lib';

const app = new App('main');

const menuModule = app.addModule(DOMInteractModule, 'menu', {
  isOpen: false,
});

menuModule.onAfterDomInit(function () {
  this.dom.burger.addEventListener('click', () => {
    this.setIsOpen(!this.getState().isOpen);
  });
});

menuModule.onUpdateIsOpen = function(current, prev) {
  console.log(`now menu is ${current ? 'open' : 'close'}, but before that menu was ${prev ? 'opened' : 'closed'}`);
  this.dom.burger.textContent = current ? 'close' : 'open';
};

app.init();

window.app = app;
