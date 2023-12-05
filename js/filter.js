function search() {
    const tasksFilter = document.querySelectorAll('.task')
    tasksFilter.forEach((item) => {
        let nameTask = item.querySelector('.text-task').innerText
        let nameTaskFormatted = nameTask.toLowerCase()
        let textComp = inputSearch.value.toLowerCase()
        let comp = nameTaskFormatted.substring(0, textComp.length)
        if (textComp.length > 0) {
            if (!(comp == textComp)) {
                item.classList.add('hide')
            }
        } else {
            filter()
        }
    })
}

function filter() {
    const tasksFilterDone = document.querySelectorAll('.task')
    const statusFilter = selFilter.value

    if (statusFilter == 'done') {
        tasksFilterDone.forEach((item) => {
            item.classList.remove('hide')
            if (!(item.classList.contains('done'))) {
                item.classList.add('hide')
            }
        })
        if (inputSearch.value.length > 0) search()

    } else if (statusFilter == 'all') {
        tasksFilterDone.forEach((item) => {
            item.classList.remove('hide')
            if (inputSearch.value.length > 0) search()
        })
    
    } else if (statusFilter == 'to-do') {
        tasksFilterDone.forEach((item) => {
            item.classList.remove('hide')
            if (item.classList.contains('done')) {
                item.classList.add('hide')
            }
        })
        if (inputSearch.value.length > 0) search()
    }
}