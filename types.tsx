import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = { Home:any, HomePage:any, Notifications:any, SavedPlans:any, AccountProfile:any, NoNotification:any, BottomNavigation:any }

export type ScreenProps = NativeStackScreenProps<RootStackParamList> 