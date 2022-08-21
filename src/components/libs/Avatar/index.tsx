import {FC} from "react";
import {AvatarWidget, AvatarWidgetProps} from "./style";


const Avatar: FC<AvatarWidgetProps> = ({name}) => {
  return <AvatarWidget>
    {name.split(' ').map(name => name[0]).join('').toUpperCase()}
  </AvatarWidget>
}


export default Avatar
