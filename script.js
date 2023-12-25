// Call the function when the page loads
window.onload = setInitialState;

function setInitialState() {
    toggleSidebar();  // Call toggleSidebar to set initial state
}

function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');


    
    // Toggle visibility for sidebar
    sidebar.style.width = (sidebar.style.width === '250px' || sidebar.style.width === '') ? '0' : '250px';

    // Adjust content margin and padding based on sidebar visibility
    content.style.marginLeft = (sidebar.style.width === '250px') ? '250px' : '0';
    content.style.paddingLeft = (sidebar.style.width === '250px') ? '16px' : '65px'; // Adjust padding based on sidebar visibility
}
