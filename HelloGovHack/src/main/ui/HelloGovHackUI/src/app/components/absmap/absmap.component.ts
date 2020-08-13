import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-absmap',
  templateUrl: './absmap.component.html',
  styleUrls: ['./absmap.component.css']
})

export class AbsmapComponent implements OnInit {

	
  constructor() { 
  }

  ngOnInit(): void {
  }

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  
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

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    this.map.data.loadGeoJson('https://data.gov.au/geoserver/vic-local-government-areas-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_bdf92691_c6fe_42b9_a0e2_a4cd716fa811&outputFormat=json');
  }  
  
  nodes = [
           {
             name: 'LGAs',
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

         optionsDisabled: ITreeOptions = {
           useCheckbox: true,
           getChildren: this.getChildren.bind(this),
           useTriState: false
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
