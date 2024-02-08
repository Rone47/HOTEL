'use client';

import { getRooms } from "@/libs/apis";
import { Room } from "@/models/room";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

const Rooms = () => {
    const [roomTypeFilter, setRoomTypeFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const searchParams = useSearchParams();

    useEffect(() => {
        const searchQuery = searchParams.get('searchQuery');
        const roomType = searchParams.get('roomType');

        if (roomType) setRoomTypeFilter(roomType);
        if (searchQuery) setSearchQuery(searchQuery);
    }, []);

    async function fetchData() {
        return getRooms ();
    }

    const {data, error, isLoading} = useSWR('get/hotelRooms',fetchData);
    
    if (error) throw new Error ('Cannot fetch data');
    if (typeof data === 'undefined' && !isLoading)
     throw new Error('Cannot fetch data');

     const filterRooms = (rooms: Room[]) => {
      return rooms.filter(room => {
        //apply room type filter

        if (
          roomTypeFilter && 
          roomTypeFilter.toLowerCase() !== 'all' && 
          room.type.toLowerCase() !== roomTypeFilter.toLowerCase()
          ) {
            return false;
          }
        // Apply search query 
        if(
          searchQuery && 
          ! room.name.toLowerCase(). includes(searchQuery.toLowerCase())
        ) {
          return false;
        }
      })
     }


  return (
    <div>Rooms</div>
  )
}

export default Rooms;