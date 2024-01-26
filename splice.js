const list= ["january",
            "february",
            "march",
            "April",
            "may"];

            list.splice(2,1)
            console.log(list); // 'january', 'february', 'April', 'may'
            // it will remove all the element ahead of index 2
            list.splice(2);
            console.log(list); // january', 'february'
