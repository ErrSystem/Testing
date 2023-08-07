let storage = {
    currentTasks : [],
    currentGroups: [],
    doneTasks: 0,
}
// add group button
document.getElementById('addButton_toDo').addEventListener('click', () => $(document.getElementById('customizationOverlay_toDo')).fadeIn('slow'));
// close group custom button
document.getElementById('closeCustomization_toDo').addEventListener('click', () => $(document.getElementById('customizationOverlay_toDo')).fadeOut('slow'));