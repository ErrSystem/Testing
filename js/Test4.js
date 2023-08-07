let storage = {
    currentTasks : [],
    currentGroups: [],
    doneTasks: 0,
}
// add group button
const addGroupClick = () => {
    $(document.getElementById('customizationOverlay_toDo')).fadeIn('slow');
    window.addEventListener('keypress', event => event.key === 'Enter' ? addGroup() : undefined)
}
// close group custom button
const closeCustomization = () => {
    $(document.getElementById('customizationOverlay_toDo')).fadeOut('slow');
}
// Add group function 
const addGroup = () => {
    $(document.getElementById('customizationOverlay_toDo')).fadeOut('slow');
    const task_contener = document.getElementById('mainTask_contener');
    let Title = document.getElementById('newContenerTitle_toDo');
    let color = document.getElementById('changeColor_toDo');
    let contener = document.createElement('div');
    document.getElementById('addButton_toDo').style.marginTop = '75px';
    document.getElementById('mainTask_contener').style.width = '80%';
    contener.setAttribute('id', `Tasks_contener_${storage.currentGroups.length}`); contener.setAttribute('class', 'Tasks_contener');
    contener.style.display = 'none'; contener.style.backgroundColor = color.value;
    contener.innerHTML += `<h1 style="overflow-wrap: break-word;" id="title_contener_${storage.currentGroups.length}">${Title.value}</h1><ul class="Tasks_list" id='Task_list_${storage.currentGroups.length}'></ul><button class="addTaskButton">Add task</button>`
    task_contener.insertAdjacentElement('afterbegin', contener);
    if (color.value === '#000000'){
        document.getElementById(`Tasks_contener_${storage.currentGroups.length}`).style.color = 'white';
    }
    $(document.getElementById(`Tasks_contener_${storage.currentGroups.length}`)).fadeIn('slow');
    Title.value = ''; color.value = '#FFFFFF';
    storage.currentGroups[storage.currentGroups.length] += Title.value;
    
}
// Add task function
const addTask = () => {
    const Task_code = `<li><p class="task">${Task}</p></li>`;

}