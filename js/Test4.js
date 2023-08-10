let storage = {
    currentTasks : [],
    currentGroups: [],
    tasks_number: 0,
    alreadyTyping: false,
    doneTasks: 0,
}
// add group button
const addGroupClick = () => {
    $(document.getElementById('customizationOverlay_toDo')).fadeIn('slow');
    document.getElementById('customizationOverlay_toDo').addEventListener('keypress', enterKeyOverlay)
}
// close group custom button
const closeCustomization = () => {
    $(document.getElementById('customizationOverlay_toDo')).fadeOut('slow');
}
// Enter key Overlay
const enterKeyOverlay = event => {
    if (event.key === 'Enter'){
        addGroup();
    }
}
// Verify if the user typed +3 characters or not
const verifyCharacters = inputID => {
    const input = document.getElementById(inputID).value.trim();
    if (input.length <= 3){
        return false;
    }
    return true;
}
// Verify if the user typed the same task or not
const verifyOld = inputID => {
    const input = document.getElementById(inputID).value.trim().toLowerCase();
    if (inputID == 'newContenerTitle_toDo') {
        if (storage.currentGroups.some(group => group == input)){
            return false;
        }
        return true;
    }
    else {
        if (storage.currentTasks.some(task => task == input)){
            return false;
        }
        return true;
    }
}
// Add group function 
const addGroup = () => {
    if (verifyCharacters('newContenerTitle_toDo') && verifyOld(`newContenerTitle_toDo`)) {
        const order = storage.currentGroups.length;
        document.getElementById('customizationOverlay_toDo').removeEventListener('keypress', enterKeyOverlay);
        $(document.getElementById('customizationOverlay_toDo')).fadeOut('slow');
        const task_contener = document.getElementById('mainGroup_contener');
        let Title = document.getElementById('newContenerTitle_toDo');
        let color = document.getElementById('changeColor_toDo');
        const contener = document.createElement('div');
        document.getElementById('addButton_toDo').style.marginTop = '75px';
        document.getElementById('mainGroup_contener').style.width = '80%';
        contener.setAttribute('id', `Group_${order}`); contener.setAttribute('class', 'Group');
        contener.style.display = 'none'; contener.style.backgroundColor = color.value;
        contener.innerHTML = `<button class="closeButtonGroup_toDo" id="closeButtonGroup_${order}" onclick='closeGroup(${order})'>X</button><h1 style="overflow-wrap: break-word;" id="title_contener_${order}">${Title.value}</h1><ul class="Tasks_contener" id='Tasks_contener_${order}'></ul><button class="addTaskButton" id="addTaskButton_${order}" onclick="add_input(${order})">Add task</button><p id="alertTask_toDo_${order}"></p>`
        task_contener.insertAdjacentElement('afterbegin', contener);
        // if color is black
        if (color.value === '#000000'){ 
            document.getElementById(`Group_${order}`).style.color = 'white'; // text color is white
            document.getElementById(`closeButtonGroup_${order}`).style.color = 'white'; // close button color is white
        }
        $(document.getElementById(`Group_${order}`)).fadeIn('slow'); // animate group display
        storage.currentGroups[order] = Title.value.trim().toLowerCase(); // adding title value to the counter
        Title.value = ''; color.value = '#FFFFFF'; // editing values
        // hover close group functions
        document.getElementById(`Group_${order}`).addEventListener('mouseover', () => closeAnim(order, 'block'));
        document.getElementById(`Group_${order}`).addEventListener('mouseout', () => closeAnim(order, 'none'));
        console.log(document.getElementById(`Group_${order}`).children)
        for (element of document.getElementById(`Group_${order}`).children) {
            element.addEventListener('mouseover', () => closeAnim(order, 'block'));
            element.addEventListener('mouseout', () => closeAnim(order, 'none'));
        }
    }
    else if (!verifyOld(`newContenerTitle_toDo`)) {
        alert_system('oldGroup', undefined);
    }
    else {
        alert_system('minCharactersOverlay', undefined);
    }
}
// Add input function
const add_input = contener => {
    if (!storage.alreadyTyping) {
        const input = document.createElement('input');
        input.style.borderRadius = '5px'; input.style.padding = '5px'; input.setAttribute('id', `input_${contener}`);
        document.getElementById(`Tasks_contener_${contener}`).insertAdjacentElement('afterbegin', input);
        document.getElementById(`addTaskButton_${contener}`).textContent = 'Done?';
        document.getElementById(`addTaskButton_${contener}`).setAttribute('onclick', `addTask(${contener})`);
        storage.alreadyTyping = !storage.alreadyTyping;
        // add key event
        const enterKeyOverlay = event => {
            if (event.key === 'Enter'){
                addTask(contener);
            }
        }
        document.getElementById(`input_${contener}`).addEventListener('keypress', enterKeyOverlay);
    }
    else {
        alert_system('alreadyTyping', contener);
    }
}
// Add task function
const addTask = contener => {
    if (verifyCharacters(`input_${contener}`) && verifyOld(`input_${contener}`)) {
        window.removeEventListener('keypress', enterKeyOverlay);
        storage.alreadyTyping = !storage.alreadyTyping;
        const task = `<li class="tasks_list" id="task_${storage.currentTasks.length}"><p>${document.getElementById(`input_${contener}`).value.trim()}</p><img src="css/img/check_icon.png" class='doneButton_toDo' onclick='doneTask(${storage.currentTasks.length})'></li>`;
        storage.currentTasks[storage.currentTasks.length] = document.getElementById(`input_${contener}`).value.trim().toLowerCase();
        storage.tasks_number++;
        document.getElementById(`Tasks_contener_${contener}`).innerHTML += task;
        document.getElementById(`addTaskButton_${contener}`).setAttribute('onclick', `add_input(${contener})`);
        document.getElementById(`addTaskButton_${contener}`).textContent = 'Add new task';
        document.getElementById(`input_${contener}`).remove();
        // add hover function
        for (let i = 0; i < document.getElementsByClassName('doneButton_toDo').length; i++){
            const element = document.getElementsByClassName('doneButton_toDo')[i];
            // invert done icon to white
            if (element.parentElement.parentElement.parentElement.style.backgroundColor == 'rgb(0, 0, 0)'){
                element.style.filter = 'invert(1)';
            }
            // adds a mouse over listener for done icon
            element.parentElement.addEventListener('mouseover', () => {
                $(element).fadeIn('fast');
            })
            // adds a mouse out listener for done icon
            element.parentElement.addEventListener('mouseout', () => {
                $(element).fadeOut('fast');
            })
        }
    }
    else if (!verifyOld(`input_${contener}`)) {
        alert_system('oldTask', contener);
    }
    else {
        alert_system('minCharactersTask', contener);
    }
}
// Done task
const doneTask = id => {
    $(document.getElementById('completedTasks_toDo')).fadeIn('fast');
    document.getElementById('task_'+id).remove();
    storage.doneTasks ++;
    storage.tasks_number --;
    storage.currentTasks[id] = undefined;
}
// Close Group
const closeGroup = id => {
    $(document.getElementById(`Group_${id}`)).fadeOut('fast');
    setTimeout(() => {
        document.getElementById(`Group_${id}`).remove();
    }, 200);
}
// Close animation
const closeAnim = (id, type) => type == 'block' ? $(document.getElementById(`closeButtonGroup_${id}`)).fadeIn('fast') : setTimeout(() => {$(document.getElementById(`closeButtonGroup_${id}`)).fadeOut('fast')}, 500);

// Alert system
const alert_system = (type, number) => {
    let alert;
    switch (type) {
        case 'minCharactersTask':
            alert = document.getElementById(`alertTask_toDo_${number}`);
            alert.innerHTML = 'You have to write atleast 4characters!';
            alert.style.color = 'red';
        break;
        case 'minCharactersOverlay':
            alert = document.getElementById('alertTitleContener_Todo');
            alert.innerHTML = 'You have to write atleast 4characters!';
        break;
        case 'oldTask':
            alert = document.getElementById(`alertTask_toDo_${number}`);
            alert.innerHTML = 'You already added this task!';
            alert.style.color = 'red';
        break;
        case 'oldGroup':
            alert = document.getElementById('alertTitleContener_Todo');
            alert.innerHTML = 'You already added this group!';
            alert.style.color = 'red';
        break;
        case 'alreadyTyping':
            alert = document.getElementById(`alertTask_toDo_${number}`);
            alert.innerHTML = 'You are already writing in another group!';
            alert.style.color = 'red';
    }
    $(alert).fadeIn('fast');
    setTimeout(() => {
        $(alert).fadeOut('fast');
    }, 3000);
}
/// remaining tasks counter
setInterval(() => {
    document.getElementById('completedTasks_toDo').innerText = `Completed Tasks: ${storage.doneTasks}`;
}, 50);

setInterval(() => {
    if (storage.currentTasks.length >= 1){
        document.getElementById('tasksCounter_toDo').innerText = `Remaining Tasks: ${storage.tasks_number}`;
    }
}, 50);