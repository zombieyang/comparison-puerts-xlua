using System.Collections.Generic;
using System;
using UnityEngine;
using XLua;
using Puerts;

//配置的详细介绍请看Doc下《XLua的配置.doc》
public static class XLuaGenConfig
{
    //lua中要使用到C#库的配置，比如C#标准库，或者Unity API，第三方库等。
    [LuaCallCSharp]
    public static List<Type> LuaCallCSharp = new List<Type>() {
        typeof(UnityEngine.Object),
        typeof(UnityEngine.Debug),
        typeof(UnityEngine.Rigidbody),
        typeof(JSBrownianMovement),
        typeof(DefaultLoader),
        typeof(System.Object),
        typeof(System.Array),
        typeof(System.Reflection.MemberInfo),
        typeof(System.Reflection.TypeInfo),
        typeof(System.Type),
        typeof(RectTransform),
        typeof(UnityEngine.EventSystems.UIBehaviour),
        typeof(UnityEngine.UI.Selectable),
        typeof(UnityEngine.UI.Slider),
        typeof(System.ValueType),
        typeof(UnityEngine.UI.Slider.Direction),
        typeof(UnityEngine.UI.Slider.SliderEvent),
        typeof(UnityEngine.Events.UnityEventBase),
        typeof(GameObject),
        typeof(Component),
        typeof(Behaviour),
        typeof(Transform),
        typeof(Resources),
        typeof(TextAsset),
        typeof(MonoBehaviour),
        typeof(SkinnedMeshRenderer),
    };
    
}

//1、配置类必须打[Configure]标签
//2、必须放Editor目录
[Configure]
public class PuertsGenConfig
{
    [Filter]
    static bool FilterMethods(System.Reflection.MemberInfo mb)
    {
        // 排除 MonoBehaviour.runInEditMode, 在 Editor 环境下可用发布后不存在
        if (mb.DeclaringType == typeof(MonoBehaviour) && mb.Name == "runInEditMode") {
            return true;
        }
        return false;
    }
    
    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
            return new List<Type>()
            {
                typeof(UnityEngine.Object),
                typeof(UnityEngine.Debug),
                typeof(UnityEngine.Rigidbody),
                typeof(JSBrownianMovement),
                typeof(DefaultLoader),
                typeof(System.Object),
                typeof(System.Array),
                typeof(System.Reflection.MemberInfo),
                typeof(System.Reflection.TypeInfo),
                typeof(System.Type),
                typeof(RectTransform),
                typeof(UnityEngine.EventSystems.UIBehaviour),
                typeof(UnityEngine.UI.Selectable),
                typeof(UnityEngine.UI.Slider),
                typeof(System.ValueType),
                typeof(UnityEngine.UI.Slider.Direction),
                typeof(UnityEngine.UI.Slider.SliderEvent),
                typeof(UnityEngine.Events.UnityEventBase),
                typeof(GameObject),
                typeof(Component),
                typeof(Behaviour),
                typeof(Transform),
                typeof(Resources),
                typeof(TextAsset),
                typeof(MonoBehaviour),
                typeof(SkinnedMeshRenderer),
            };
        }
    }
    [BlittableCopy]
    static IEnumerable<Type> Blittables
    {
        get
        {
            return new List<Type>()
            {
                //打开这个可以优化Vector3的GC，但需要开启unsafe编译
                typeof(Vector3),
            };
        }
    }
}