import { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';

delete (L.Icon.Default as any).prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

const MapLocation: FC<any> = () => {

    const position: [number, number] = [36.63611, 29.12434];
    return(
        <>
        <div className="flex justify-center">
             <div className="sm:h-[400px] h-[200px] container z-0">
                <MapContainer
                center={position}
                zoom={15}
                scrollWheelZoom={true}
                style={{height: "100%", width: "100%" }}
                >
                    <TileLayer
                    
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>Buradayız!</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
           
        </>
    )
}
export default MapLocation;