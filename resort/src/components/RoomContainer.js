
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";
import { RoomConsumer, withRoomFilter } from "../context/context";

const RoomContainer = ({ context }) => {
  const { rooms, sortedRooms, isLoading } = context;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomFilter(RoomContainer);
