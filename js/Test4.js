let storage = {
    currentTasks : [],
    currentGroups: [],
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
    const input = document.getElementById(inputID).value.trim();
    if (inputID == 'newContenerTitle_toDo') {
        if (storage.currentGroups.some(group => group == input.toLowerCase())){
            return false;
        }
        return true;
    }
    else {
        if (storage.currentTasks.some(task => task == input.toLowerCase())){
            return false;
        }
        return true;
    }
}
// Add group function 
const addGroup = () => {
    if (verifyCharacters('newContenerTitle_toDo') && verifyOld(`newContenerTitle_toDo`)) {
        document.getElementById('customizationOverlay_toDo').removeEventListener('keypress', enterKeyOverlay);
        $(document.getElementById('customizationOverlay_toDo')).fadeOut('slow');
        const task_contener = document.getElementById('mainTask_contener');
        let Title = document.getElementById('newContenerTitle_toDo');
        let color = document.getElementById('changeColor_toDo');
        const contener = document.createElement('div');
        document.getElementById('addButton_toDo').style.marginTop = '75px';
        document.getElementById('mainTask_contener').style.width = '80%';
        contener.setAttribute('id', `Tasks_contener_${storage.currentGroups.length}`); contener.setAttribute('class', 'Tasks_contener');
        contener.style.display = 'none'; contener.style.backgroundColor = color.value;
        contener.innerHTML += `<h1 style="overflow-wrap: break-word;" id="title_contener_${storage.currentGroups.length}">${Title.value}</h1><ul class="Tasks_list" id='Task_list_${storage.currentGroups.length}'></ul><button class="addTaskButton" id="addTaskButton_${storage.currentGroups.length}" onclick="add_input(${storage.currentGroups.length})">Add task</button><p id="alertTask_toDo"></p>`
        task_contener.insertAdjacentElement('afterbegin', contener);
        if (color.value === '#000000'){ 
            document.getElementById(`Tasks_contener_${storage.currentGroups.length}`).style.color = 'white';
        }
        $(document.getElementById(`Tasks_contener_${storage.currentGroups.length}`)).fadeIn('slow');
        storage.currentGroups[storage.currentGroups.length] = Title.value;
        Title.value = ''; color.value = '#FFFFFF';
    }
    else if (!verifyOld(`newContenerTitle_toDo`)) {
        alert_system('oldGroup');
    }
    else {
        alert_system('minCharactersOverlay');
    }
}
// Add input function
const add_input = contener => {
    const input = document.createElement('input');
    input.style.borderRadius = '5px'; input.style.padding = '5px'; input.setAttribute('id', `input_${contener}`);
    document.getElementById(`Task_list_${contener}`).insertAdjacentElement('afterbegin', input);
    document.getElementById(`addTaskButton_${contener}`).textContent = 'Done?';
    document.getElementById(`addTaskButton_${contener}`).setAttribute('onclick', `addTask(${contener})`);
    // add key event
    const enterKeyOverlay = event => {
        if (event.key === 'Enter'){
            addTask(contener);
        }
    }
    document.getElementById(`input_${contener}`).addEventListener('keypress', enterKeyOverlay);
}
// Add task function
const addTask = contener => {
    if (verifyCharacters(`input_${contener}`) && verifyOld(`input_${contener}`)) {
        window.removeEventListener('keypress', enterKeyOverlay)
        const task = `<li class="task">${document.getElementById(`input_${contener}`).value}</li>`;
        storage.currentTasks[storage.currentTasks.length] = document.getElementById(`input_${contener}`).value;
        document.getElementById(`Task_list_${contener}`).innerHTML += task;
        document.getElementById(`addTaskButton_${contener}`).setAttribute('onclick', `add_input(${contener})`);
        document.getElementById(`addTaskButton_${contener}`).textContent = 'Add new task';
        document.getElementById(`input_${contener}`).remove();
    }
    else if (!verifyOld(`input_${contener}`)) {
        alert_system('oldTask')
    }
    else {
        alert_system('minCharactersTask')
    }
}
// Alert system
const alert_system = type => {
    let alert;
    switch (type) {
        case 'minCharactersTask':
            alert = document.getElementById('alertTask_toDo');
            alert.innerHTML = 'You have to write atleast 4characters!';
            alert.style.color = 'red';
        break;
        case 'minCharactersOverlay':
            alert = document.getElementById('alertTitleContener_Todo');
            alert.innerHTML = 'You have to write atleast 4characters!';
        break;
        case 'oldTask':
            alert = document.getElementById('alertTask_toDo');
            alert.innerHTML = 'You already added this task!';
            alert.style.color = 'red';
        break;
        case 'oldGroup':
            alert = document.getElementById('alertTitleContener_Todo');
            alert.innerHTML = 'You already added this group!';
            alert.style.color = 'red';
        break;
    } 
    $(alert).fadeIn('fast');
    setTimeout(() => {
        $(alert).fadeOut('fast');
    }, 3000);
}