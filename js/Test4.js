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
        document.getElementById('customizationOverlay_toDo').removeEventListener('keypress', enterKeyOverlay)
    }
}
// Enter key add task
const enterKeyTask = event => {
    if (event.key === 'Enter'){
        addTask(contener);
        window.removeEventListener('keypress', enterKeyOverlay)
    }
}

// Add group function 
const addGroup = () => {
    $(document.getElementById('customizationOverlay_toDo')).fadeOut('slow');
    const task_contener = document.getElementById('mainTask_contener');
    let Title = document.getElementById('newContenerTitle_toDo');
    let color = document.getElementById('changeColor_toDo');
    const contener = document.createElement('div');
    document.getElementById('addButton_toDo').style.marginTop = '75px';
    document.getElementById('mainTask_contener').style.width = '80%';
    contener.setAttribute('id', `Tasks_contener_${storage.currentGroups.length}`); contener.setAttribute('class', 'Tasks_contener');
    contener.style.display = 'none'; contener.style.backgroundColor = color.value;
    contener.innerHTML += `<h1 style="overflow-wrap: break-word;" id="title_contener_${storage.currentGroups.length}">${Title.value}</h1><ul class="Tasks_list" id='Task_list_${storage.currentGroups.length}'></ul><button class="addTaskButton" id="addTaskButton_${storage.currentGroups.length}" onclick="add_input(${storage.currentGroups.length})">Add task</button>`
    task_contener.insertAdjacentElement('afterbegin', contener);
    if (color.value === '#000000'){ 
        document.getElementById(`Tasks_contener_${storage.currentGroups.length}`).style.color = 'white';
    }
    $(document.getElementById(`Tasks_contener_${storage.currentGroups.length}`)).fadeIn('slow');
    Title.value = ''; color.value = '#FFFFFF';
    storage.currentGroups[storage.currentGroups.length] += Title.value;
}
// Add input function
const add_input = contener => {
    const input = document.createElement('input');
    input.style.borderRadius = '5px'; input.style.padding = '5px'; input.setAttribute('id', `input_${contener}`);
    document.getElementById(`Task_list_${contener}`).insertAdjacentElement('afterbegin', input);
    document.getElementById(`addTaskButton_${contener}`).textContent = 'Done?';
    document.getElementById(`addTaskButton_${contener}`).setAttribute('onclick', `addTask(${contener})`);
    window.addEventListener('keypress', enterKeyTask());
}
// Add task function
const addTask = contener => {
    const task = `<li class="task">${document.getElementById(`input_${contener}`).value}</li>`;
    document.getElementById(`Task_list_${contener}`).innerHTML += task;
    document.getElementById(`addTaskButton_${contener}`).setAttribute('onclick', `add_input(${contener})`);
    document.getElementById(`addTaskButton_${contener}`).textContent = 'Add new task';
    document.getElementById(`input_${contener}`).remove();
}