import Stimp from '../../dist/stimp';

console.log(Stimp);

const app = new Stimp.App('main');

const menuModule = app.addModule(Stimp.DOMInteractModule, 'menu', {
  isOpen: false,
});

menuModule.onAfterDomInit(function () {
  this.dom.burger.addEventListener('click', () => {
    console.log(this);
    this.setState({
      isOpen: !this.state.isOpen,
    });
  });
});

menuModule.onUpdateIsOpen = function(current, prev) {
  console.log(`now menu is ${current ? 'open' : 'close'}, but before that menu was ${prev ? 'opened' : 'closed'}`);
  this.dom.burger.textContent = current ? 'close' : 'open';
};

app.init();

window.app = app;
