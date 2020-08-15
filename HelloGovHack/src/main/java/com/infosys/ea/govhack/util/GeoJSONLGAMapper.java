package com.infosys.ea.govhack.util;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.infosys.ea.govhack.model.LGA;

public class GeoJSONLGAMapper {

	public GeoJSONLGAMapper() {
	}
	
	/**
	 * 
	 * @param geoJSON
	 */
	public static List<LGA> mapGeojsonToLGA (String geoJSON) throws IOException {
		
		ObjectMapper mapper = new ObjectMapper();
		ArrayList<LGA> lgaList = new ArrayList<>();
		
		JsonNode rootNode = mapper.readTree(new URL(
				"https://data.gov.au/geoserver/vic-local-government-areas-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_bdf92691_c6fe_42b9_a0e2_a4cd716fa811&outputFormat=json\r\n"
						+ ""));
		JsonNode features = rootNode.get("features");
		for(JsonNode feature : features) {
			JsonNode lga2Node = feature.findValue("vic_lga__2");
			if(lga2Node != null) {
				LGA lga = new LGA();
				lga.setName(lga2Node.asText());
				JsonNode coordinatesNode = feature.findValue("coordinates");
				lga.setMapsPolygon(convertJsonToGmaps(coordinatesNode.elements().next().toString().strip().substring(2).replace("]]", "")));
				lgaList.add(lga);
			}
		}
		return lgaList;
	}
	
	
	/**
	 * In [147.241724,-36.867031],[147.24201818,-36.86706675],[147.24240887,-36.86721704]
	 * Out {lat: 37.772, lng: -122.214}, {lat: 21.291, lng: -157.821}, {lat: -18.142, lng: 178.431}, {lat: -27.467, lng: 153.027}
	 * 
	 * @param jsonCoords
	 * @return
	 */
	private static String convertJsonToGmaps(String jsonCoords) {
		
		StringBuffer gmapsCoords = new StringBuffer("");
		
		boolean lat = true;
		int index = 0;
		
		StringTokenizer tokenizer = new StringTokenizer(jsonCoords, ",");
		while(tokenizer.hasMoreTokens()) {
			String token = tokenizer.nextToken();
			if(lat) {
				gmapsCoords.append((index > 0?", ":"")).append("{lat: ").append(token.substring(1)).append(", ");
			} else { //lng
				gmapsCoords.append("lng: ").append(token.replace("]", "")).append("} ");				
			}
			lat = !lat;
			index++;
		}
		
		return gmapsCoords.append("").toString();
	}

}
