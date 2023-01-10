ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([320549.176493, 4063610.307683, 327576.078850, 4069668.758753]);
var wms_layers = [];

var lyr_Indice_de_Shannon_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Indice_de_Shannon",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Indice_de_Shannon_0.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320922.237000, 4063585.854500, 327012.237000, 4069345.854500]
                            })
                        });
var lyr_Distancia_a_canales_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Distancia_a_canales",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Distancia_a_canales_1.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320922.237000, 4063585.854500, 327012.237000, 4069345.854500]
                            })
                        });
var lyr_Orientacin_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Orientación",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Orientacin_2.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320926.581300, 4063581.458000, 327006.581300, 4069341.458000]
                            })
                        });
var lyr_Densidad_pinsapo_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Densidad_pinsapo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Densidad_pinsapo_3.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320930.219600, 4063583.666100, 327012.832000, 4069343.480200]
                            })
                        });
var lyr_Segmentacin_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Segmentación",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Segmentacin_4.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320914.469600, 4063577.194800, 327015.124800, 4069347.148200]
                            })
                        });
var format_Segmentacin_Poligono_5 = new ol.format.GeoJSON();
var features_Segmentacin_Poligono_5 = format_Segmentacin_Poligono_5.readFeatures(json_Segmentacin_Poligono_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Segmentacin_Poligono_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Segmentacin_Poligono_5.addFeatures(features_Segmentacin_Poligono_5);
var lyr_Segmentacin_Poligono_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Segmentacin_Poligono_5, 
                style: style_Segmentacin_Poligono_5,
                interactive: true,
                title: '<img src="styles/legend/Segmentacin_Poligono_5.png" /> Segmentación_Poligono'
            });

lyr_Indice_de_Shannon_0.setVisible(true);lyr_Distancia_a_canales_1.setVisible(true);lyr_Orientacin_2.setVisible(true);lyr_Densidad_pinsapo_3.setVisible(true);lyr_Segmentacin_4.setVisible(true);lyr_Segmentacin_Poligono_5.setVisible(true);
var layersList = [lyr_Indice_de_Shannon_0,lyr_Distancia_a_canales_1,lyr_Orientacin_2,lyr_Densidad_pinsapo_3,lyr_Segmentacin_4,lyr_Segmentacin_Poligono_5];
lyr_Segmentacin_Poligono_5.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Segmentacin_Poligono_5.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_Segmentacin_Poligono_5.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Segmentacin_Poligono_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});