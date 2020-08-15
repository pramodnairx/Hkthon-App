import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AbsmapserviceService } from './../../services/absmapservice.service';
import { TreeModule, ITreeOptions, TreeComponent, TreeModel, TreeNode } from '@circlon/angular-tree-component';
import { Lga } from '../../model/lga.model';


@Component({
  selector: 'app-absmap',
  templateUrl: './absmap.component.html',
  styleUrls: ['./absmap.component.css']
})

export class AbsmapComponent implements OnInit {

	
  constructor(private absMapService: AbsmapserviceService) { 
  }

  ngOnInit(): void {
  }

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  @ViewChild('tree') treeComponent: TreeComponent;
  
  map: google.maps.Map;
  lat = -37.4713;
  lng = 144.7852;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
   center: this.coordinates,
   zoom: 8
  };

  ngAfterViewInit() {
    this.mapInitializer();
  }
  
  
  //Input {lat: 37.772, lng: -122.214}, {lat: 21.291, lng: -157.821}, {lat: -18.142, lng: 178.431}, {lat: -27.467, lng: 153.027}
  parseResultToLatLngArray(jsonArray: string): Array<google.maps.LatLng> {
	  var latLngArray: Array<google.maps.LatLng> = [];
	  var tokens = jsonArray.trim().replace(/\s/g, "").split(",");
	  //console.log(tokens);
	  var counter = 0;
	  var lat: number; var lng: number;
	  for (let token of tokens) {
		  if(counter == 0) {
			  lat = Number(token.replace("{lat:", ""));
			  counter++;
		  } else {
			  lng = Number(token.replace("lng:", "").replace("}", ""));			  
			  latLngArray.push(new google.maps.LatLng(lng, lat)); // Damn! Got the lat and langs mixed up all the way from back!
			  counter--;
		  }
	  }
	  return latLngArray;
  }
  
  mapInitializer() {

	const treeModel:TreeModel = this.treeComponent.treeModel;
    const firstNode:TreeNode = treeModel.getFirstRoot();
	  
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    //this.map.data.loadGeoJson('https://data.gov.au/geoserver/vic-local-government-areas-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_bdf92691_c6fe_42b9_a0e2_a4cd716fa811&outputFormat=json');
    this.absMapService.getLGACoordinates().subscribe(
    		result => {
    			for(let item of result) {
        			var latLngArray = this.parseResultToLatLngArray((<Lga>item).mapsPolygon);
        			var lgaPoly = new google.maps.Polyline({
        				path: latLngArray,
        				geodesic: true,
        			    strokeColor: '#FF0000',
        			    strokeOpacity: 1.0,
        			    strokeWeight: 2    				
        				});
        			lgaPoly.setMap(this.map);
        			firstNode.data.children.push({"name" : (<Lga>item).name, "children":[]});
        			treeModel.update();
        			firstNode.focus(); firstNode.setIsActive(true);
        			treeModel.update();
        			//document.getElementById("lgas").onchange(Event.onchange);
    			}
    		}
    );
  }  
  
  nodes = [
           {
             name: 'LGAs',
             id: 'lgas',
             children:[]
           },
           {
             name: 'Income',
             children: [
               { name: 'Family' },
               { name: 'Individual', children: [
                 { name: 'Age group < 30' },
                 { name: 'Age group > 30' }
               ] }
             ]
           },
         ];
  
  options: ITreeOptions = {
		    useCheckbox: true,
		    getChildren: this.getChildren.bind(this)
		  };

         getChildren(node: any) {
           const newNodes = [
             {
               name: 'child1'
             }, {
               name: 'child2'
             }
           ];

           return new Promise((resolve, reject) => {
             setTimeout(() => resolve(newNodes), 1000);
           });
         }
  
}
