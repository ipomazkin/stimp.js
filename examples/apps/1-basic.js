import Stimp from '../../dist/stimp';

const app = new Stimp.App('main');

const helloModule = app.addModule(Stimp.Module, 'hello', {
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
