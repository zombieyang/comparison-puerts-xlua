using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Puerts;
using XLua;
public class GameManager : MonoBehaviour
{
    public GameObject SliderPrefab;
    public GameObject SliderParent;
    public UnityEngine.UI.Text UpdateTime;
    public static GameManager Instance;
    public JsEnv JsEnv;
    public LuaEnv LuaEnv;

    void Start() 
    {
        Instance = this;
    }

    public float currentUpdateTime = 0;
    protected float totalUpdateTime = 0;
    protected int totalFrame = 0;
    void Update() {
        totalUpdateTime += currentUpdateTime;
        totalFrame += 1;
        UpdateTime.text = (totalUpdateTime / totalFrame) * 1000 + "ms";
        currentUpdateTime = 0;
        if (JsEnv != null) 
        {
            JsEnv.Tick();
        }
        if (LuaEnv != null) 
        {
            LuaEnv.Tick();
        }
    }

    protected void Clean()
    {
        int childCount = SliderParent.transform.childCount;
        for (int i = 0; i < childCount; i++)
        {
            var go = SliderParent.transform.GetChild(i).gameObject;
            GameObject.Destroy(go);
            if (LuaEnv != null)
            {
                go.GetComponent<LuaBrownianMovement>().LuaUpdate = null;
                go.GetComponent<LuaBrownianMovement>().LuaStart = null;
            }
        }
        if (JsEnv != null)
        {
            JsEnv.Dispose();
            JsEnv = null;
        }
        if (LuaEnv != null)
        {
            LuaEnv.Dispose();
            LuaEnv = null;
        }

        totalUpdateTime = 0;
        totalFrame = 0;
    }

    public void RunPuerts(int UnitCount)
    {
        Clean();
        JsEnv = new JsEnv();
        // JsEnv = new JsEnv(new DefaultLoader(), 9222);
        // JsEnv.WaitDebugger();
        UnityEngine.Debug.Log("RunPuerts: " + UnitCount);
        
        for (int i = 0; i < UnitCount; i++)
        {
            var obj = UnityEngine.Object.Instantiate(SliderPrefab);
            obj.transform.position = new Vector3(
                UnityEngine.Random.Range(-400, 400),
                0,
                UnityEngine.Random.Range(-200, 400)
            );
            obj.transform.parent = SliderParent.transform;
            obj.AddComponent<JSBrownianMovement>();
        }
    }

    public void RunCSharp(int UnitCount)
    {
        Clean();
        UnityEngine.Debug.Log("RunCSharp: " + UnitCount);
        
        for (int i = 0; i < UnitCount; i++)
        {
            var obj = UnityEngine.Object.Instantiate(SliderPrefab);
            obj.transform.position = new Vector3(
                UnityEngine.Random.Range(-400, 400),
                0,
                UnityEngine.Random.Range(-200, 400)
            );
            obj.transform.parent = SliderParent.transform;
            obj.AddComponent<CSBrownianMovement>();
        }
    }

    public void RunXLua(int UnitCount)
    {
        Clean();
        LuaEnv = new LuaEnv();
        UnityEngine.Debug.Log("RunXLua: " + UnitCount);
        
        for (int i = 0; i < UnitCount; i++)
        {
            var obj = UnityEngine.Object.Instantiate(SliderPrefab);
            obj.transform.position = new Vector3(
                UnityEngine.Random.Range(-400, 400),
                0,
                UnityEngine.Random.Range(-200, 400)
            );
            obj.transform.parent = SliderParent.transform;
            obj.AddComponent<LuaBrownianMovement>();
        }
    }
}
