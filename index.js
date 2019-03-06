// add solution here
artists = ['John Lennon','Paul McCartney', 'George Harrison', 'Ringo Starr'];
instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

function theBeatlesPlay(artist_arr,instrument_arr) {
  let sentences = [];
  for (let i = 0; i < artist_arr.length; i++) {
    sentences.push(artist_arr[i] + ' plays ' + instrument_arr[i]);
  }
  console.log(sentences);
  return sentences
}
theBeatlesPlay(artists,instruments)
