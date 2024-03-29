function mergeSortedList(l1,l2){
    let resultedList;
    let current = resultedList;
    while(l1 !== null && l2 !== null){
        if(l1.val <= l2.val){
            current.next = l1;
            l1 = l1.next;
        }
        else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    if(l1 === null) {
        current.next = l2;
    }
    else {
        current.next = l1;
    }
    current = current.next;
    return resultedList;
}