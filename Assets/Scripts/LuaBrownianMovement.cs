using UnityEngine;
using System;
using XLua;

public class LuaBrownianMovement : MonoBehaviour
{
    private LuaTable scriptEnv;

    public Action LuaStart;
    void Start()
    {

        scriptEnv = GameManager.Instance.LuaEnv.NewTable();
        scriptEnv.Set("self", this);
        LuaTable meta = GameManager.Instance.LuaEnv.NewTable();
        meta.Set("__index", GameManager.Instance.LuaEnv.Global);
        scriptEnv.SetMetaTable(meta);
        meta.Dispose();
        GameManager.Instance.LuaEnv.DoString(Resources.Load<TextAsset>("BrownianMovement.lua").text, "LuaTestScript", scriptEnv);

        scriptEnv.Get("start", out LuaStart);
        scriptEnv.Get("update", out LuaUpdate);
        if (LuaStart != null) LuaStart();
    }

    public Action LuaUpdate;
    void Update()
    {
        float start = Time.realtimeSinceStartup;
        if (LuaUpdate != null) LuaUpdate();
        GameManager.Instance.currentUpdateTime += (Time.realtimeSinceStartup - start);
    }

    void OnDestroy()
    {
        LuaUpdate = null;
        LuaStart = null;
    }
}