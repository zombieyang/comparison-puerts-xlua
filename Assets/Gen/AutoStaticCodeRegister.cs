namespace PuertsStaticWrap
{
    public static class AutoStaticCodeRegister
    {
        public static void Register(Puerts.JsEnv jsEnv)
        {
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Object), UnityEngine_Object_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Debug), UnityEngine_Debug_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Rigidbody), UnityEngine_Rigidbody_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(JSBrownianMovement), JSBrownianMovement_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(Puerts.DefaultLoader), Puerts_DefaultLoader_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Object), System_Object_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Array), System_Array_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Reflection.MemberInfo), System_Reflection_MemberInfo_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Reflection.TypeInfo), System_Reflection_TypeInfo_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Type), System_Type_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RectTransform), UnityEngine_RectTransform_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.EventSystems.UIBehaviour), UnityEngine_EventSystems_UIBehaviour_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Selectable), UnityEngine_UI_Selectable_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Slider), UnityEngine_UI_Slider_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.ValueType), System_ValueType_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Slider.SliderEvent), UnityEngine_UI_Slider_SliderEvent_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Events.UnityEventBase), UnityEngine_Events_UnityEventBase_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GameObject), UnityEngine_GameObject_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Component), UnityEngine_Component_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Behaviour), UnityEngine_Behaviour_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Transform), UnityEngine_Transform_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Resources), UnityEngine_Resources_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TextAsset), UnityEngine_TextAsset_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MonoBehaviour), UnityEngine_MonoBehaviour_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SkinnedMeshRenderer), UnityEngine_SkinnedMeshRenderer_Wrap.GetRegisterInfo);
            
        }
    }
}