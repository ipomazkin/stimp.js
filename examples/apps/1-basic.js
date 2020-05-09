import { App, Module } from '../../lib';

const app = new App('main');

const helloModule = app.addModule(Module, 'hello', {
  didISayHello: false,
});

helloModule.onUpdateDidISayHello = function(currentValue, prevValue) {
  if (currentValue) {
    console.log(`I'm have already sad hello.`);
  } else {
    console.log(`I have not sad hello yet.`);
  }
};

app.init();

helloModule.setState({
  didISayHello: true,
});

helloModule.setState({
  didISayHello: false,
});

helloModule.setDidISayHello(true);
