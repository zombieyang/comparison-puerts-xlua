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
        typeof(Vector3),
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
    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
            return new List<Type>()
            {
        typeof(UnityEngine.Object),
        typeof(Vector3),
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
}