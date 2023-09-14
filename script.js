const library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      readingStatus: true,
    },
    {
      author: "Steve Jobs",
      title: "Walter Isaacson",
      readingStatus: true,
    },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false,
    },
  ];
  
  const numberOfBooksRead = () => {
    // write your code here
    let c=0;
    for(let i in library){
        // console.log(typeof(i));
        for(let j in library[i]){
        if(typeof(library[i][j])==Boolean);{
            if(library[i][j]==true)
            c++;
        }

        }

    }
    return c;
  }
  
  // Do not change the code below
  
  alert(numberOfBooksRead());
