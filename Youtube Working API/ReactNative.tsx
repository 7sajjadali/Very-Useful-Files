 import React, {useEffect, useState} from 'react';
 import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
 import {WebView} from 'react-native-webview';
 import {XMLParser} from 'fast-xml-parser';

 const YouTubePlaylist = () => {
   const [videos, setVideos] = useState([]);

   useEffect(() => {
     const fetchPlaylist = async () => {
       try {
         const response = await fetch(
           'https://www.youtube.com/feeds/videos.xml?channel_id=UCran6gZ1SyggkAMTk9lr5NQ',
         );
         const data = await response.text();

         // Parse the XML using fast-xml-parser
         const parser = new XMLParser();
         const jsonObj = parser.parse(data);

         // Extract video details
         const entries = jsonObj.feed.entry || [];
         const parsedVideos = entries.map(entry => ({
           id: entry['yt:videoId'],
           title: entry.title,
           published: entry.published,
         }));

         setVideos(parsedVideos);
       } catch (error) {
         console.error('Error fetching playlist:', error);
       }
     };

     fetchPlaylist();
   }, []);

 return (
   <View style={styles.container}>
     <Text style={styles.header}>YouTube Playlist</Text>
     <FlatList
       data={videos}
       keyExtractor={item => item.id}
       renderItem={({item}) => (
         <View style={styles.videoCard}>
           <Text style={styles.title}>{item.title}</Text>
           <WebView
             source={{uri: `https://www.youtube.com/embed/${item.id}`}}
             style={styles.videoPlayer}
             allowsInlineMediaPlayback={true}
           />
           <Text style={styles.published}>
             Published: {new Date(item.published).toLocaleDateString()}
           </Text>
         </View>
       )}
     />
   </View>
 );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  videoCard: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoPlayer: {
    width: Dimensions.get('window').width - 40,
    height: 200,
    alignSelf: 'center',
    marginBottom: 10,
  },
  published: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
});

export default YouTubePlaylist;
