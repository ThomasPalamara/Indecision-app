    console.log('App.js is running!');

    const app = {
        title: 'Indecision app',
        subtitle: 'Put your life in the hands of a computer',
        options: ['One','Two']
    }
    //JSX - JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0 ? 'Here are your options :' : 'No options'}</p>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    );

    const user ={
        name: 'Thomas',
        age: 23,
        location: 'London'
    };
    function getLocation(location){
        if(location){
            return <p>Location : {location}</p>;
        }
    }
    const templateTwo = (
        <div>
            <h4>{user.name ? user.name.toUpperCase() + ' !' : 'Anonymous'}</h4>
            {(user.age && user.age>=18) && <p>Age: {user.age}</p>}
            {getLocation(user.location)}
        </div>
    );

    const appRoot = document.getElementById('app');

    ReactDOM.render(template, appRoot);