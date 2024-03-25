# Belly Button Challenge

In this challenge, a dataset cataloguing the microbial species that live in human navels (belly buttons) were analyzed and displayed in an interactive dashboard. The demographic data and graphs change based upon the subject

# Dropdown

The dropdown menu is available to toggle through which subject to view information on. Subjects are grouped by their ID number. 
![image](https://github.com/andymatsuura/belly_button_challenge/assets/150174589/3d238ca5-3e9b-4434-a9c9-d774a1ddd5fb)

# Demographic Information

In this section, information like ethnicity, gender, age, location, belly button type and washing frequency. It changes based on the Subject ID selected. Information is organized by key-value pair. This was found in the "metadata" array. 
![image](https://github.com/andymatsuura/belly_button_challenge/assets/150174589/0690119b-bbb1-47bf-bd27-0e60dac41c5b)

# Bar Graph
The top 10 OTU's (operational taxonomic units) found in each sample_value were displayed, grouped by otu_id.
When scrolling over bars in the bar graph, the amount of samples per OTU were displayed, along with more information on that OTU (OTU labels).
![image](https://github.com/andymatsuura/belly_button_challenge/assets/150174589/f8701e49-2659-4b89-8340-1348b3dec9a9)

# Bubble Plot
A bubble chart is generated per sample ID. The OTU ID's were displayed along the X-axis and the sample values along the Y-axis. The size of the bubble was larger with higher sample values as well. Hovertext are the OTU labels. 
![image](https://github.com/andymatsuura/belly_button_challenge/assets/150174589/93d6d6b4-d1c0-4cf6-a911-9ac619dcbd01)

# Gauge Plot
The gauge plot displays the washing frequency metadata. 
![image](https://github.com/andymatsuura/belly_button_challenge/assets/150174589/79f2e205-4158-4cc4-8c25-3c1f620167fd)

# Information Used:
* https://plotly.com/javascript/bubble-charts/
* https://plotly.com/javascript/bar-charts/
* https://plotly.com/javascript/gauge-charts/
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

