function search() {
   const townToSearch = document.getElementById('searchText').value;
   const townsElements = document.querySelectorAll('#towns li')
   const resultElement = document.getElementById('result');
   let matchesCount = 0;
   for (const town of townsElements) {
      if (town.textContent.toLowerCase()
         .includes(townToSearch.toLowerCase())) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matchesCount++;
      } else {
         town.style.textDecoration = 'none';
         town.style.fontWeight = '500';
      }
   }
   resultElement.textContent = `${matchesCount} matches found`
}
