import {create} from "zustand";
import { axiosInstance } from "../lib/axios";
import type { AuthStore } from "./interface/AuthStore ";
import type { AuthUser } from "./interface/AuthUser";
import toast from "react-hot-toast";

export const useAuthStore =  create<AuthStore>((set) =>({
    authUser:null,
    isSigningUp: false,
    isLoggingIng:false,
    isUpdatingProfile:false,
    isCheckingAuth:true,

    checkAuth: async() =>{
        try {
            const res =  await axiosInstance.get<AuthUser>("/auth/check");
            set({ authUser: res.data})    
        } catch (error) {
            console.log("Error in checkAuth",error)
            set({ authUser: null})
        }finally{
            set({ isCheckingAuth: false})
        }
    },
    signup: async(data)=>{
       set({isSigningUp: true});
        try {
            const res = await axiosInstance.post("/auth/signup",data);
            set({authUser: res.data});
            toast.success("Account created successfully")
        } catch (error: any) {
            toast.error(error.response.data.message)
        } finally{
            set({ isSigningUp: false})  
        }
    },
    logout: async()=>{
        try {
            const res = await axiosInstance.post("/auth/logout");
            set({authUser: null});
            toast.success("Logged out successfully")
        } catch (error: any) {
            toast.error(error.response.data.message)
        } finally{
            set({ isSigningUp: false})  
        }
    },
    login: async(data:any)=>{
       set({isLoggingIng: true});
        try {
            const res = await axiosInstance.post("/auth/login",data);
            set({authUser: res.data});
            toast.success("Login successfully")
        } catch (error: any) {
            toast.error(error.response.data.message)
        } finally{
            set({ isLoggingIng: false})  
        }
    },
}))